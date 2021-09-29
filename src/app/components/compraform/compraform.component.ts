import { Component, OnInit } from '@angular/core';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Global } from 'src/app/services/global';
import { funkopop } from 'src/app/models/funkopop';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'compraform',
  templateUrl: './compraform.component.html',
  styleUrls: ['./compraform.component.css'],
  providers: [FunkopopService]
})
export class CompraformComponent implements OnInit {
  public funko: funkopop = new funkopop('','','',0,0,0,false,'','');
  public cantidad:number = 1;
  public correo:string = "";
  public url:string = Global.url;
  public pricefinal: number = 0;
  public costoenvio:number = 500;
  public aux: any;
  public trolley: Array<Item> = [];
  public item: Item = {funko:this.funko,cant:0}

  constructor(
    private _FunkoPopService: FunkopopService,
    public _router: Router,
    public _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.aux = sessionStorage.getItem('trolley');
    this.trolley = JSON.parse(this.aux);

    for (let i = 0; i < this.trolley.length; i++) {
      this.getfunko(this.trolley[i]);
    }
    this.finalPrice();
  }

  buy(form:any){
    if(this.trolley.length > 0){
      alert('Felicidades por su compra invisible, pronto le llegara una factura invisible a su correo :D')
      console.log(form)
      for (let i = 0; i < this.trolley.length; i++) {
        this.trolley[i].funko.stock -= this.trolley[i].cant;
        this.saveFunko(this.trolley[i].funko);
      }
      this.trolley = [];
      sessionStorage.setItem('trolley',  JSON.stringify(this.trolley));
    }else {
      alert('Su carrito sigue vacio :c')
    }
    
  }

  getfunko(item:Item) {
    this.item.funko= item.funko;
    this.item.cant = item.cant
  }

  saveFunko(funko: funkopop) {
    this._FunkoPopService.updateFunko(funko).subscribe(
      response =>{
        
      },
      err => {
        console.log(err);
      }
    )
  }

  finalPrice(){
    this.pricefinal = 0;
    for (let i = 0; i < this.trolley.length; i++) {
      this.pricefinal += this.trolley[i].funko.price*this.trolley[i].cant;
    }
    this.pricefinal += this.costoenvio;
  }

  addCant(index:number){
    this.trolley[index].cant++;
    this.finalPrice();
    sessionStorage.setItem('trolley',  JSON.stringify(this.trolley));
  }

  removeCant(index:number){
    this.trolley[index].cant--;
    this.finalPrice();
    sessionStorage.setItem('trolley',  JSON.stringify(this.trolley));
    if ( this.trolley[index].cant==0){
      this.removeItem(index);
    }

  }

  removeItem(index:number){
    this.trolley.splice(index,1);
    this.finalPrice();
    sessionStorage.setItem('trolley',  JSON.stringify(this.trolley));
  }
}

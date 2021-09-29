import { Component, OnInit, Input } from '@angular/core';
import { funkopop } from 'src/app/models/funkopop';
import { Global } from 'src/app/services/global';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'funkopop',
  templateUrl: './funkopop.component.html',
  styleUrls: ['./funkopop.component.css'],
  providers: [FunkopopService]
})
export class FunkopopComponent implements OnInit {
  public funko: funkopop = new funkopop('','','',0,0,0,false,'','');
  public url: string = Global.url;
  public userA: any = {exist:'false',admin:'false'};
  public aux: any;
  public trolley: Array<Item> = [];
  public item: Item = {funko: this.funko,cant:0};
  public cantidad = 0;

  constructor(
    public _FunkoPopService: FunkopopService,
    public _router: Router,
    public _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getfunko(id);
    });
  }

  getfunko(id:string){
    this._FunkoPopService.getFunkoPop(id).subscribe(
      response => {
        if(response.funkopop){
          this.funko = response.funkopop;
        };
      },
      err => {
        console.log(err);
      }
    )
  }

  ngDoCheck(){
    this.userA.admin = sessionStorage.getItem('admin');
  }

  addItemTrolley(){

    if(this.funko.stock < this.cantidad){
      alert('No hay stock suficiente')
      
    }else {
      this.item.funko = this.funko;
      this.item.cant = this.cantidad;

      this.aux = sessionStorage.getItem('trolley');
      this.trolley = JSON.parse(this.aux);
  
      if(this.trolley.length == 0){
        this.trolley.push(this.item);
      }else{
        var index = 0;
        for (let i = 0; i < this.trolley.length; i++) {
          if(this.trolley[i].funko._id == this.item.funko._id){
            break
          }else {
            index++;
          }
        }
        if(index < this.trolley.length){
          this.trolley[index].cant += this.item.cant
        }else {
          this.trolley.push(this.item);
        }
      }
      
      sessionStorage.setItem('trolley',  JSON.stringify(this.trolley));
      alert("Producto agregado al carrtio :D")
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Global } from 'src/app/services/global';
import { funkopop } from 'src/app/models/funkopop';
import { Router,ActivatedRoute,Params } from '@angular/router';

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
  constructor(
    private _FunkoPopService: FunkopopService,
    public _router: Router,
    public _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getfunko(id);
    });
  }

  ngDoCheck() {
    this.pricefinal = this.funko.price*this.cantidad+this.costoenvio;
    console.log("hola")
  }
  buy(form:any){
    alert('Felicidades por su compra invisible, pronto le llegara una factura invisible a su correo :D')
    this.funko.stock -= 1;
    this.saveFunko();
    this._router.navigate(['/']);
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

  saveFunko() {
    this._FunkoPopService.updateFunko(this.funko).subscribe(
      response =>{
        
      },
      err => {
        console.log(err);
      }
    )
  }
}

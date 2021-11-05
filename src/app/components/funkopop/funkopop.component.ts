import { Component, OnInit, Input } from '@angular/core';
import { funkopop } from 'src/app/models/funkopop';
import { Global } from 'src/app/services/global';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Item } from 'src/app/models/item';
import { authService } from 'src/app/services/auth.services';

@Component({
  selector: 'funkopop',
  templateUrl: './funkopop.component.html',
  styleUrls: ['./funkopop.component.css'],
  providers: [FunkopopService]
})
export class FunkopopComponent implements OnInit {
  public funko: funkopop = new funkopop('','','',0,0,0,false,'','');
  public url: string = Global.url;
  public aux: any;
  public access:boolean = false;
  public trolley: Array<Item> = [];
  public item: Item = {funko: this.funko,cant:0};
  public cantidad = 0;

  constructor(
    private _FunkoPopService: FunkopopService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: authService
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
    this.access = this._authService.loggedIn()

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

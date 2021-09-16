import { Component, OnInit, Input } from '@angular/core';
import { funkopop } from 'src/app/models/funkopop';
import { Global } from 'src/app/services/global';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

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
}

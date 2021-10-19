import { Component, OnInit } from '@angular/core';
import { funkopop } from 'src/app/models/funkopop';
import { FunkopopService } from 'src/app/services/funkopop.service';

@Component({
  selector: 'all-funko',
  templateUrl: './all-funko.component.html',
  styleUrls: ['./all-funko.component.css'],
  providers: [FunkopopService],

  
})
export class AllFunkoComponent implements OnInit {
  public funkopops: funkopop[] = [];
  public title:string = "FunkoPops"
  public nameSearch: string = "";
  public nameSearchM: string = "";
  
  constructor(
    private _FunkoPopService: FunkopopService
  ) { }

  ngOnInit(){
    this.getFunkoPops();
  }
  
  ngDoCheck() {
    this.nameSearch = this.nameSearchM.toLowerCase();
  }

  getFunkoPops() {
    this._FunkoPopService.getFunkoPops().subscribe(
      response => {
        if(response.funkopop){
          this.funkopops = response.funkopop;
        };
      },
      err => {
        console.log(err);
      }
    )
  }
}

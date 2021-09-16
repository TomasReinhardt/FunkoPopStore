import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap} from '@angular/router'
import { funkopop } from 'src/app/models/funkopop';
import { FunkopopService } from 'src/app/services/funkopop.service';

@Component({
  selector: 'saga-funko',
  templateUrl: '../all-funko/all-funko.component.html',
  styleUrls: ['./saga-funko.component.css'],
  providers: [FunkopopService]
})
export class SagaFunkoComponent implements OnInit {
  public funkopops: funkopop[] = [];
  public title:any = "";

  constructor(
    private _funkopopService: FunkopopService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('saga');
      this.getSagaFunkoPop();
    });
  }

  getSagaFunkoPop() {
    this._funkopopService.getSagaFunkoPop(this.title).subscribe(
      response => {
        this.funkopops = response.funkopop;
      },
      err => {
        console.log(err);
      }
    )
  }

}

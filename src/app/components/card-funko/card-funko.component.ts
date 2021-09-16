import { Component, OnInit, Input } from '@angular/core';
import { funkopop } from 'src/app/models/funkopop';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'card-funko',
  templateUrl: './card-funko.component.html',
  styleUrls: ['./card-funko.component.css']
})
export class CardFunkoComponent implements OnInit {
  @Input() funko: funkopop = new funkopop('','','',0,0,0,false,'','');
  public url: string = Global.url;
  constructor() { }

  ngOnInit(): void {
  }

}

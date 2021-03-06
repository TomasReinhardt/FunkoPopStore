import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import { Item } from './models/item';
import { authService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public title = 'Tienda FunkoPop';
  public access: boolean = false
  public aux: any;
  public trolley: Array<Item> = [];

  constructor(
    private _authService: authService
  ) {

  }
  ngOnInit(): void { 
    alert("La funcion de subir y editar imagen no funciona debido a que el host gratuito que utilizo para montar la api no permite la carga de archivos. \n\nLas imagene fueron subidas mediando la api de forma local, para ver el codigo de subida de imagenes ingresar al repositorio: \n\nhttps://github.com/TomasReinhardt/api-rest-funkopop.git")
    if(sessionStorage.getItem('trolley') == null){
      sessionStorage.setItem('trolley',  JSON.stringify(this.trolley));
    }
  }
  click(){
    $('.list-collections').slideToggle();
  }
  
  ngDoCheck(){
    this.access = this._authService.loggedIn()
  }
}

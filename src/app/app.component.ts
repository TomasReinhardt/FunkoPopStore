import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'TiendaFunkoPop';
  public userA: any = {exist:'false',admin:'false'};

  ngOnInit(): void { 
    alert("La funcion de subir y editar imagen no funciona debido a que el host gratuito que utilizo para montar la api no permite la carga de archivos. \n\nLas imagene fueron subidas mediando la api de forma local, para ver el codigo de subida de imagenes ingresar al repositorio: \n\nhttps://github.com/TomasReinhardt/api-rest-funkopop.git")
  }
  click(){
    $('.list-collections').slideToggle();
  }
  
  ngDoCheck(){
    this.userA.admin = sessionStorage.getItem('admin');
  }
}

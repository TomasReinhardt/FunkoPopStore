import { Component, OnInit } from '@angular/core';
import { funkopop } from 'src/app/models/funkopop';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Global } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'funko-add',
  templateUrl: './funko-add.component.html',
  styleUrls: ['./funko-add.component.css'],
  providers: [ FunkopopService,UploadService]
})
export class FunkoAddComponent implements OnInit {
  public funko: funkopop = new funkopop('','','',0,0,0,false,'','');
  public filesToUpload: Array<File> = [];
  public title:string = "Añadir FunkoPop";
  public url:string = Global.url;

  constructor(
    private _FunkoPopService: FunkopopService,
    private _UploadService: UploadService
  ) { }

  ngOnInit(): void {
  }

  saveFunko(form: any) {
    this._FunkoPopService.saveFunko(this.funko).subscribe(
      response =>{
        if(this.filesToUpload.length >= 1){
          this._UploadService.makeFileRequest(Global.url+'upload-image/'+response.funkopop._id,[],this.filesToUpload,'image')
        }
        alert("Funko cargado");
        form.reset();
      },
      err => {
        console.log(err);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}

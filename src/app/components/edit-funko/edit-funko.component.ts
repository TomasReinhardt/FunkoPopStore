import { Component, OnInit } from '@angular/core';
import { funkopop } from 'src/app/models/funkopop';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Global } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'edit-funko',
  templateUrl: '../funko-add/funko-add.component.html',
  styleUrls: ['./edit-funko.component.css'],
  providers: [ FunkopopService,UploadService]
})
export class EditFunkoComponent implements OnInit {
  public funko: funkopop = new funkopop('','','',0,0,0,false,'','');
  public filesToUpload: Array<File> = [];
  public title:string = "Editar FunkoPop";
  public url:string = Global.url;

  constructor(
    private _FunkoPopService: FunkopopService,
    private _UploadService: UploadService,
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

  saveFunko(form: any) {
    this._FunkoPopService.updateFunko(this.funko).subscribe(
      response =>{
        if(this.filesToUpload.length >= 1){
          this._UploadService.makeFileRequest(Global.url+'upload-image/'+response.funkopop._id,[],this.filesToUpload,'image')
        }
        alert("Funko editado");
        this._router.navigate(['/funkopop',this.funko._id]);
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

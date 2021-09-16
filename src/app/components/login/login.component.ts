import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FunkopopService]
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";
  public url:string = Global.url;
  public userA: any = {exist:'false',admin:'false'};


  constructor(
    public _FunkopopService: FunkopopService,
    public _router: Router,
  ) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('admin') == null && sessionStorage.getItem('exist') == null){
      sessionStorage.setItem('admin', this.userA.admin);
      sessionStorage.setItem('exist', this.userA.exist);
    }
  }

  checkUser(form:any){
    this._FunkopopService.getUser(this.username+'-'+this.password).subscribe(
      response => {
        this.userA = response;
        if(this.userA.exist == false){
          alert("usuario o contraseña incorrectos")
        }else {
          sessionStorage.setItem('admin', this.userA.admin);
          sessionStorage.setItem('exist', this.userA.exist);
        }
        form.reset()
      },
      err => {
        console.log(err);
      }
    )
  }

  logOut(){
    this.userA.exist = false;
    this.userA.admin = false;
    sessionStorage.setItem('admin', this.userA.admin);
    sessionStorage.setItem('exist', this.userA.exist);
    this._router.navigate(['/']);
  }

  ngDoCheck(){
    this.userA.admin = sessionStorage.getItem('admin');
    this.userA.exist = sessionStorage.getItem('exist');
  }
}


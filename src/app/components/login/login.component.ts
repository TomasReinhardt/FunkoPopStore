import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FunkopopService } from 'src/app/services/funkopop.service';
import { authService } from 'src/app/services/auth.services';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FunkopopService, authService]
})
export class LoginComponent implements OnInit {
  public access: boolean = false
  public url:string = Global.url;
  public user: any = {
    email:'',
    password:''
  };


  constructor(
    private _FunkopopService: FunkopopService,
    private _router: Router,
    private _authService: authService
  ) { }

  ngOnInit(): void {

  }

  checkUser(form:any){
    this._authService.singUp(this.user).subscribe(
      response => {
        sessionStorage.setItem('token', response.token)
          this.access = true
          form.reset();
      },
      err => {
        console.log(err);
        alert('Error al iniciar sesion')
      }
    )
  }

  logOut(){
    this._authService.logOut();
    this.access = false;
  }

  ngDoCheck(){
    this.access = this._authService.loggedIn()
  }
}


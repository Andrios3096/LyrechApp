import { Component, OnInit } from '@angular/core';
//servicio
import { ServicioService } from '../../services/servicio.service';
import { Router} from '@angular/router';



declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public _ServicioService:ServicioService, public _Router:Router ) { 
  }
    
  ngOnInit() {
    init_plugins();
  }



  ingresar(){
    this._ServicioService.login()
    .then((res)=> {
      this._Router.navigate(['/proyectos'])
    }).catch (err=>console.log(err.message))
  }

  loginCorreo(){
    this._ServicioService.loginEmail(this.email, this.password)
    .then ((res) => {
      this._Router.navigate(['/proyectos'])
    }). catch ((err) => { 
      console.log(err)
      this._Router.navigate(['/login'])
  })
  }


}

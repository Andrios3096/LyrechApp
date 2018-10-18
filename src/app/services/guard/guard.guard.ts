import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServicioService } from '../../services/servicio.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { map,take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    public _ServicioService:ServicioService, public _AngularFireAuth:AngularFireAuth
    , public _Router:Router
  ){}
  canActivate (next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
    return this._ServicioService._AngularFireAuth.authState 
    .pipe(take(1)) 
    .pipe(map(authState => !!authState)) 
    .pipe(tap(authenticated =>{ 
      if(!authenticated){ 
      this._Router.navigate(['/login']); 
  } 
})) 
}
}

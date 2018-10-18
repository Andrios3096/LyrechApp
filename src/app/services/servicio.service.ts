import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Router } from "@angular/router";
import { map } from 'rxjs/operators'





@Injectable({
  providedIn: 'root'
})
export class ServicioService {

authState=null;


  constructor(public _AngularFireAuth:AngularFireAuth,
              public _Router:Router) { }


  loginEmail(email: string, pass:string) {
    return new Promise((resolve, reject) => {
      this._AngularFireAuth.auth.signInWithEmailAndPassword(email,pass)
      .then (userData => resolve (userData),
      err => reject(err));
    });
  }


  login() {
   return this._AngularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }


  getAuth(){
    return this._AngularFireAuth.authState.pipe(map(auth=>auth))
  }


  logout() {
    return this._AngularFireAuth.auth.signOut();
  }

}

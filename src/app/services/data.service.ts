import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  proyectosCollection: AngularFirestoreCollection<any>;
  proyectos: Observable<any[]>
  proyectoDoc: AngularFirestoreDocument<any>;

  constructor(public _AngularFirestore:AngularFirestore) { 
    this.proyectos = _AngularFirestore.collection('proyectos').valueChanges();

  }

  getProyectos(){
    return this.proyectos
  }
}

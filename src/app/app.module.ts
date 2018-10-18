import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListaProyectosComponent } from './components/lista-proyectos/lista-proyectos.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ContenidoComponent } from './components/contenido.component';

//
import { AppRoutingModule } from './app.routes';

//servicio
import { ServicioService } from './services/servicio.service';
import { GuardGuard } from './services/guard/guard.guard';
import { DataService } from './services/data.service';



import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// angular maetrial
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ListaProyectosComponent,
    ListaTareasComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule



  ],
  providers: [ServicioService, GuardGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

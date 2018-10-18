import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './components/login/login.component';
import { ListaProyectosComponent } from './components/lista-proyectos/lista-proyectos.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ContenidoComponent } from './components/contenido.component';

import { GuardGuard } from './services/guard/guard.guard';





const routes: Routes = [

    { path: '', component: ContenidoComponent, canActivate: [GuardGuard],

    children :[
    { path: 'proyectos', component: ListaProyectosComponent, },
    { path: 'tareas', component: ListaTareasComponent, },
    { path: '', pathMatch: 'full', redirectTo:'proyectos' },
    ]},
    
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
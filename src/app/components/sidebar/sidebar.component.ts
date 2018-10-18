import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../../services/servicio.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _ServicioService:ServicioService,
    public _Router:Router) { }

  ngOnInit() {
  }

  salir(){
    this._ServicioService.logout()
    this._Router.navigate(['/login'])
  }


}

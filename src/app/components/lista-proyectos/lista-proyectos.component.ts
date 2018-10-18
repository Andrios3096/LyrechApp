import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'



@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {



  constructor(public _DataService:DataService) { 

  }



  ngOnInit() {
    this._DataService.getProyectos().subscribe( proyectos =>{
      console.log(proyectos)
    })
  }

}



import { MessageI } from './../../Models/message-interface';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  public listaDeUsuarios:Array<MessageI>=[]; 

  constructor(private servicio:DataServiceService) { }

  ngOnInit(): void {
    this.servicio.disparador.subscribe(nuevoUsuario =>{
      this.listaDeUsuarios.push(nuevoUsuario);
      
    });
  }
   load():any{

   }

}

import { MessageI } from './../../Models/message-interface';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  constructor(public servicio:DataServiceService) { }

  ngOnInit(): void { 
    };
  


}

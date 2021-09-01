import { Injectable } from '@angular/core';
import { MessageI } from './Models/message-interface';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  public listaDeUsuarios: MessageI[] = [];
  constructor() { }
}

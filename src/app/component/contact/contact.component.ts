import { MessageI } from './../../Models/message-interface';
import { DataServiceService } from './../../data-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public contactForm: FormGroup;
  constructor(public servicio:DataServiceService) {
    this.contactForm = this.createForm();
  }


  createForm() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3) ]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      direccion: new FormControl('', [Validators.required,Validators.minLength(5) ])
  });
}

 onResetForm(): void {
    this.contactForm.reset();
  }
  onSaveForm(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) { 
      this.servicio.listaDeUsuarios.push(this.contactForm.value);
      this.onResetForm();
    }
  }
}
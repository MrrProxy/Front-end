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
  constructor(private servicio:DataServiceService) {
    this.contactForm = this.createForm();
  }

  get name() { return this.contactForm.get('nombre'); }
  get apellido() { return this.contactForm.get('apellido'); }
  get direccion() { return this.contactForm.get('direccion'); }

  createForm() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(5)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)])
    });
  }

  onResetForm(): void {
    this.contactForm.reset();
  }
  onSaveForm(nuevoUsuario: MessageI) {
    if (this.contactForm.valid) {
      this.onResetForm();
    }
    
    this.servicio.disparador.emit(nuevoUsuario);
  }

}

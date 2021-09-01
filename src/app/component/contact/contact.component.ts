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
  public mostrarDatos: boolean = false;

  public contactForm: FormGroup;
  constructor(public servicio:DataServiceService) {
    this.contactForm = this.createForm();
  }


  createForm() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.email])
  });
}

 onResetForm(): void {
    this.contactForm.reset();
  }
  /*
  onSaveForm() :any{ 
    //var nuevoUsuario= new Usuario();
    console.log("saved" ,this.contactForm.value);
    console.log(this.contactForm.valid);
    console.log(this.contactForm.get("nombre"));


    if (this.contactForm.valid) { 
      this.servicio.listaDeUsuarios.push(this.contactForm.value);
      this.onResetForm();
    }
   
  }*/
  save(event: Event) {
    event.preventDefault();
    const value = this.contactForm.value;
    console.log(value);
    console.log("saved" ,this.contactForm.value);
    console.log(this.contactForm.valid);
    console.log(this.contactForm.get("nombre"));
    this.servicio.listaDeUsuarios.push(this.contactForm.value);

    if (this.contactForm.valid) { 
      this.servicio.listaDeUsuarios.push(this.contactForm.value);
      this.onResetForm();
    }
  }

  public MostrarUsuarios(): void{
    this.mostrarDatos=true;


  }
}
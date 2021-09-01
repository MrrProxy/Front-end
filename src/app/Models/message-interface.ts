

export interface MessageI {
    nombre: string;
    apellido: string;
    direccion: string;

    getNombre(): string;
    getApellido(): string;
    getDireccion(): string;
  }
/*
  export class Usuario implements MessageI{
    nombre: string;
    apellido: string;
    direccion: string;

    constructor(){
      this.nombre="";
      this.apellido="";
      this.direccion="";
    }

    getNombre(): string{
      return this.nombre;
    }
    getApellido(): string{
      return this.apellido;
    }
    getDireccion(): string{
      return this.direccion;

    }

  }*/

    
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crearcitas',
  templateUrl: './crearcitas.component.html',
  styleUrls: ['./crearcitas.component.css']
})
export class CrearcitasComponent implements OnInit {
 nombre = ""
 fecha = ""
 hora = " "
 descripcion = ""
 
 formulario__incorecto = false
 //coroborar siempre que EventEmitter from core CORE
 @Output()   nuevacita = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  


  recetCampos(){
      this.nombre = ""
      this.fecha = ""
      this.hora = ""
      this.descripcion = ""
    
  }
  agregarCita(){ 
    if(this.nombre == "" || this.descripcion == ""  || this.hora ==""  || this.fecha ==""){
      this.formulario__incorecto = true
      return
    }else{
      this.formulario__incorecto = false
      //crear un objero para ser enviado
      const CITA = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        descripcion: this.descripcion
      }
      this.nuevacita.emit(CITA)
      this.recetCampos()
      
      
      
    }
  }
}

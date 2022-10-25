import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listado__de_citas:any[]   = []


  agregarCita(cita: any){
   console.log("soy el padre");
   console.log(cita);
  this.listado__de_citas.push(cita)
  console.log(this.listado__de_citas);
  
  }
  eliminarCitaListada(index:number){
    this.listado__de_citas.splice(index,1)
  }
}


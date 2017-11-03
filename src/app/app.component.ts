import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Jair Suárez";
  
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  
  pi = Math.PI;
  
  numero = 0.234;
  
  moneda = 1234.52323;
  
  heroe = {
  	nombre: 'Logan',
  	clave: 'Wolverine',
  	edad: 500,
  	direccion: {
  		calle: 'primera',
  		casa: 19
  	}
  }
  
  promesa = new Promise((resolve, reject)=>{
  	setTimeout(()=>resolve('Llegó el Dato'), 3500)
  })

  fecha = new Date();

  nombre2 = "jAir jOSé SuÁrEz LóPEZ";

  video = 'https://www.youtube.com/embed/by8oyJztzwo';

  nombre3 = 'Hipopotomostro';
  mostrar = true;
}

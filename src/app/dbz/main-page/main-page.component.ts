import { Component, OnInit } from '@angular/core';


interface Personaje{
  nombre:string,
  poder:number,
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajes:Personaje[]=[
   { nombre:'Goku',
    poder:50000,},
    { nombre:'Vegeta',
    poder:5000,}
  ]

  nuevo:Personaje={
    nombre:'',
    poder:0,
  }

  agregar(){
  
    if(this.nuevo.nombre.trim().length ===0 ){
      return
    }
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }


  cambiarNombre(event:any){

    console.log(event.target.value)
  }
}

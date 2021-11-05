import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




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
    nombre:'Maestro Roshi',
    poder:1000,
    }

    onNewCharacter(character:Personaje){
     this.personajes.push( character );
    }
    

}


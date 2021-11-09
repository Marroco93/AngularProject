import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{



private _personajes:Personaje[]=[
    { nombre:'Goku',
     poder:50000,},
     { nombre:'Vegeta',
     poder:5000,}
   ]

   get personajes():Personaje[]{
       return [...this._personajes];
   }


   constructor(){}

   agregarPersonage(data:Personaje){
       this._personajes.push(data)
   }
}
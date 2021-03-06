import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{


    nombre:string = 'IronMan';
    edad:number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    };

    ObtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    CambiarNombre():void{
        this.nombre = "Spiderman";
    }

    CambiarEdad():void{
        console.log("LAL")
        this.edad = 30;
    }
}
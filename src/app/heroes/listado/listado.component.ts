import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ["Spiderman","Batman","Capitan America"]
  HeroeBorrado:string="";
  borrarHeroe(){
    

    let DeleteHeroe = this.heroes.shift();

    this.HeroeBorrado = DeleteHeroe || "";
  }

}

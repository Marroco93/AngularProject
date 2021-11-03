import  {Component} from '@angular/core';


@Component({

    selector:'app-contador',
    
    template:`
    
    <h1>
{{titulo}}
  </h1>



  <h3>La base es <strong> {{base}} </strong></h3>
<button (click)="acumular(base)">+1</button>
<button (click)="acumular(-base)">-1</button>

  <span>{{numero}}</span> `


    })

export  class ContadorComponent{


    titulo:string = 'Contador App';
    numero:number=0;
  
    base:number=5;
  
    // sumar(){
    //   this.numero +=1;
    // };
    // restar(){
    //   this.numero -=1
    // }
  
  
  
    acumular(valor :number){
      this.numero += valor;
    }


}
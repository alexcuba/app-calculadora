import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{

  titulo = "Calculadora con Angular";
  
  resultado: number;

  onResultado(resultado: number){
    this.resultado = resultado;
  }

 
}

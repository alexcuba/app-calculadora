import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  titulo:string="Calculadora con Angular";
  resultado:number=0;
  operandoA:number=0;
  operandoB:number=0;

  constructor() { 

  }

  ngOnInit() {
  }

  getResultado():void{
    this.resultado = this.operandoA + this.operandoB;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoSuma = new EventEmitter<number>();
  operandoA:number=0;
  operandoB:number=0;

  constructor() { }

  ngOnInit() {
  }

  onSumar():void{
   let resultado = this.operandoA + this.operandoB;
   this.resultadoSuma.emit(resultado);
  }
}

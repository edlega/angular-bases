import { Component } from "@angular/core";

// Al poner una coma  + ctrl y espacio, podemos ver todas las opciones de angular core

@Component ({
  selector: 'app-counter', // Cómo quiero utilizar el componente en html(nombre)
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset(10)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number) {
      this.counter += value;
  }

  reset(value: number){
    this.counter = value;
  }

}


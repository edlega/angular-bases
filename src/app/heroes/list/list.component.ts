import { Component } from '@angular/core';

/* a-component para crear componentes rápido */

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletHero?: string;

  removeLastHero(): void {
    this.deletHero = this.heroNames.pop();
  }
}


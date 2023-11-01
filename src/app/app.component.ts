import { Component } from '@angular/core';

/* a-component para crear componentes rápido */
@Component({
  selector: 'app-root', // etiqueta personalizada de html (como lo quiero llamar)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo';

}

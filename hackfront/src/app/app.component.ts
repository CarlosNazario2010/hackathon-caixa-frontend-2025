import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // Importe RouterOutlet e RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], // Adicione RouterOutlet e RouterModule
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simulador de Finanças';
}
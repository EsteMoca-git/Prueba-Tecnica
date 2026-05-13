import { Component, signal } from '@angular/core';
import { ClientesPage } from "./features/clientes/pages/clientes-page/clientes-page";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClientesPage, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pruebaTecnicaSysnet');


}

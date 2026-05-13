import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../../interfaces/models/cliente.interface';
import { ClienteService } from '../../../../services/cliente-service';
import { Navbar } from '../../components/navbar/navbar';
import { ClienteForm } from '../../components/cliente-form/cliente-form';



@Component({
  selector: 'app-clientes-page',
  standalone: true,
  imports: [CommonModule, Navbar, ClienteForm],
  templateUrl: './clientes-page.html',
  styleUrls: ['./clientes-page.css']
})

export class ClientesPage implements OnInit {


  
  private clienteService = inject(ClienteService);

  clientes: Cliente[] = [];

  ngOnInit(): void {

    this.obtenerClientes();
  }

  obtenerClientes() {

    this.clienteService.obtenerClientes()
      .subscribe({
        next: (data) => {

          console.log(data);

          this.clientes = data;
        },

        error: (error) => {
          console.log(error);
        }
      });
  }

}
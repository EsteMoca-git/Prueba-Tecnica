import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../../services/cliente-service';
import { ClienteForm } from '../../components/cliente-form/cliente-form';
import { Navbar } from '../../components/navbar/navbar';
import { Cliente } from '../../../../interfaces/models/cliente.interface';

@Component({
  selector: 'app-clientes-page',
  standalone: true,
  imports: [CommonModule, ClienteForm, Navbar],
  templateUrl: './clientes-page.html',
  styleUrls: ['./clientes-page.css']
})
export class ClientesPage implements OnInit {

  private clienteService = inject(ClienteService);

  clientes: Cliente[] = [];
  clienteSeleccionado: Cliente | null = null;

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.obtenerClientes().subscribe({
      next: (data) => this.clientes = data
    });
  }

  editar(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
  }

  eliminar(id: string) {
    this.clienteService.eliminarCliente(id).subscribe(() => {
      this.obtenerClientes();
    });
  }

  recargar() {
    this.obtenerClientes();
    this.clienteSeleccionado = null;
  }
}
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClienteService } from '../../../../services/cliente-service';
import { Cliente } from '../../../../interfaces/models/cliente.interface';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cliente-form.html',
  styleUrl: './cliente-form.css',
})
export class ClienteForm implements OnInit {
  private fb = inject(FormBuilder);
  private clienteServices = inject(ClienteService);

  fechaActual = new Date().toISOString().split('T')[0];
  clienteSeleccionado: Cliente | null = null;

  // ✅ propiedad que faltaba
  clientes: Cliente[] = [];

  clienteForm = this.fb.group({
    identificacion: ['', Validators.required],
    tipoIdentificacion: ['', Validators.required],
    primerNombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
    segundoNombre: ['', Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$')],
    primerApellido: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
    segundoApellido: ['', Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$')],
    direccion: [''],
    telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    email: ['', [Validators.required, Validators.email]],
    ocupacion: [''],
    fechaNacimiento: ['', Validators.required],
    foto: [''],
  });

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteServices.obtenerClientes().subscribe({
      next: (data) => (this.clientes = data),
      error: () => Swal.fire('Error', 'No se pudieron cargar los clientes', 'error'),
    });
  }

  guardarCliente(): void {
    if (this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched();
      return;
    }

    if (this.clienteSeleccionado) {
      this.clienteServices.actualizarCliente(this.clienteSeleccionado._id!, this.clienteForm.value).subscribe({
        next: () => {
          Swal.fire('Actualizado', 'Cliente actualizado correctamente', 'success');
          this.clienteForm.reset();
          this.clienteSeleccionado = null;
          this.cargarClientes();
        },
        error: () => Swal.fire('Error', 'No se pudo actualizar el cliente', 'error'),
      });
    } else {
      this.clienteServices.crearCliente(this.clienteForm.value).subscribe({
        next: () => {
          Swal.fire('Registrado', 'Cliente guardado correctamente', 'success');
          this.clienteForm.reset();
          this.cargarClientes();
        },
        error: () => Swal.fire('Error', 'No se pudo guardar el cliente', 'error'),
      });
    }
  }

  editarCliente(cliente: Cliente): void {
    this.clienteSeleccionado = cliente;
    this.clienteForm.patchValue(cliente);
  }

  eliminarCliente(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteServices.eliminarCliente(id).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'Cliente eliminado correctamente', 'success');
            this.cargarClientes();
          },
          error: () => Swal.fire('Error', 'No se pudo eliminar el cliente', 'error'),
        });
      }
    });
  }
}

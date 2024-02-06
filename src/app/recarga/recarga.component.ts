import { Component, OnInit } from '@angular/core';
import { ClienteServices } from '../services/cliente-services';
import { Cliente } from '../domain/cliente';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.scss']
})
export class RecargaComponent implements OnInit{
  telefono: any;
  monto: any;
  recargaExitosa = false;
  errorRecarga = false;
  personas : any
  persona: Cliente = new Cliente();

  constructor(private clienteService : ClienteServices){}

  ngOnInit(): void {
    this.personas = this.clienteService.getCliente()
  }

  recargarSaldo() {
    console.log(this.telefono, this.monto);
    this.clienteService.recargarSaldo(this.telefono, this.monto)
      .subscribe(
        () => {
          // Recarga exitosa, podrías mostrar un mensaje de éxito o realizar otras acciones necesarias.
          console.log('Recarga exitosa');
        },
        error => {
          // Error al recargar el saldo, podrías mostrar un mensaje de error o realizar otras acciones necesarias.
          console.error('Error al recargar el saldo:', error);
        }
      );
  }

  refreshPage() {
    window.location.reload();
  }
  
      
}

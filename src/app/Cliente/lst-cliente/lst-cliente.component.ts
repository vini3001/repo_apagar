import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente.service';
import { Cliente } from '../../models/Cliente';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lst-cliente',
  templateUrl: './lst-cliente.component.html',
  styleUrl: './lst-cliente.component.css'
})
export class LstClienteComponent implements OnInit {
  clientes: Cliente[] = []
  clienteFrm: Cliente = {}
  mostrarModal: boolean = false
  constructor(private service: ClienteService, private router: Router) {}
  
  ngOnInit(): void {
    this.obterClientes()
  }

  onClick() {
    this.router.navigate(['/register-cliente'])
  }

  openEdit(id: number | undefined) {

    this.router.navigate([`/update-cliente/`, id  ])
  }

  obterClientes() {
    this.service.obterTodos().subscribe({
      next: (dados) => {
        this.clientes = dados
      }
    })
  }

  obterCliente(id: number) {
    this.service.obterPorId(id).subscribe({
      next: (dados) => {
        this.clienteFrm = dados
      }
    })
  }
}

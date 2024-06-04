import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente.service';
import { Cliente } from '../../models/Cliente';
import { Router } from '@angular/router';

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
    console.log(id)
    this.router.navigate([`/update-cliente/`, id  ])
  }

  obterClientes() {
    this.clientes = this.service.obterTodos()
  }

  obterCliente(id: number) {
    this.clienteFrm = this.service.obterPorId(id)
  }
}

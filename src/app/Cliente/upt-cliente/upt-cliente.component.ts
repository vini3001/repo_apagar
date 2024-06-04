import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-upt-cliente',
  templateUrl: './upt-cliente.component.html',
  styleUrl: './upt-cliente.component.css'
})
export class UptClienteComponent implements OnInit {
  cliente: Cliente = {}

  constructor(private service: ClienteService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = parseFloat(this.route.snapshot.paramMap.get('id') as string);
    const client = this.service.obterPorId(id)
    
    this.cliente = JSON.parse(JSON.stringify(client));
  }

  submitForm() {
    this.service.alterar(this.cliente.id as number, this.cliente)
    this.router.navigate(['/'])
  }

  deleteClient(id: number | undefined) {
    this.service.deletar(id as number)
  }
}

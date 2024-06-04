import { Component } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrl: './frm-cliente.component.css'
})
export class FrmClienteComponent {
    cliente: Cliente = {};

    constructor(private service: ClienteService, private router: Router) {}

    submitForm() {
      this.service.inserir(this.cliente).subscribe({
        next: () => {
          alert('usuário criado com sucesso')
        }
      })
      this.router.navigate(['/'])
    }
}

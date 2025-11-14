import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-menssages',
  templateUrl: './menssages.component.html',
  styleUrls: ['./menssages.component.css']
})
export class MenssagesComponent {

  clienteRemover: any;
  constructor(private cadastroComponent: CadastroComponent, private cadastroService: CadastroService){
    this.clienteRemover = this.cadastroComponent.clientesEditveis[0]
  
  }

  cancelarOperation(){
    this.cadastroComponent.indexMenssages = false
    this.cadastroComponent.indexMain = true
    if(this.cadastroComponent.indexMain){
      this.cadastroComponent.habBTNEdit = true
    }
  }

  confirmarOperation(){
    this.cadastroService.delete( this.clienteRemover.id).subscribe({
      next: cliente => {
       this.cadastroComponent.ngOnInit()
       this.cancelarOperation()
      },
      error : err => {
        console.log(err)
      }
    })


  }
}

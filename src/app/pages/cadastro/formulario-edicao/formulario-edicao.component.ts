import { Component, inject } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';
import { Clientes } from 'src/app/model/cliente';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-edicao',
  templateUrl: './formulario-edicao.component.html',
  styleUrls: ['./formulario-edicao.component.css'],
  providers: [CadastroService]
})

export class FormularioEdicaoComponent {

    clienteRecebido: any;
    clienteEdit: any
    formBuilder = inject(FormBuilder)
    formAddclient = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      contato: ['',[Validators.required,Validators.pattern(/^\d{10,11}$/)]],
      endereco: ['', [Validators.required, Validators.minLength(5)]],
    })

  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){
  
    this.clienteRecebido = this.cadastroComponent.clientesEditveis[0]
    console.log(this.clienteRecebido)

  }

  enviarDados(){

    if(this.formAddclient.valid){
      this.clienteEdit = this.formAddclient.value
      console.log(this.clienteEdit)
      this.cadastroService.updade(this.clienteEdit, this.clienteRecebido.id ).subscribe({
        next: cliente=>{
             this.cadastroComponent.ngOnInit()
            this.cadastroComponent.fecharForm()
            console.log(cliente)
        },
        error: err=>{
          console.log(err)
        }
      }
      )
    }
    
 
  }
  
  fecharForm(){
    this.cadastroComponent.fecharForm()
  }

  

}

import { Component, inject } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Clientes } from 'src/app/model/cliente';
import { Servico } from 'src/app/model/servico';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
  providers: [CadastroService]
})


export class FormulariosComponent {
  clienteCadastrado!: any;
  formBuilder = inject(FormBuilder)
  formAddclient = this.formBuilder.group({
  nome: ['', [Validators.required, Validators.minLength(3)]],
  contato: ['',[Validators.required,Validators.pattern(/^\d{10,11}$/)]],
  endereco: ['', [Validators.required, Validators.minLength(5)]],
  servico: this.formBuilder.array([
    this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      data: ['', Validators.required],
      bike: ['', [Validators.required, Validators.minLength(3)]],
      valor: [null, [Validators.required, Validators.min(1)]],
      maisInfo: ['']
    })
  ])
});
  
  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){ 
    
  }

    get servicoForms() {
    return (this.formAddclient.get('servico') as FormArray).controls;
  }

fecharForm(){
  this.cadastroComponent.fecharForm()
}

enviarDados(){
  if(this.formAddclient.valid){
    this.clienteCadastrado = this.formAddclient.value
    this.cadastroService.save(this.clienteCadastrado).subscribe({
    next: text => {
      this.cadastroComponent.ngOnInit()
      this.cadastroComponent.fecharForm()
    },
    error: errr => {
      console.log(errr)
    }
  })
    
  }

  
   
 
}



}

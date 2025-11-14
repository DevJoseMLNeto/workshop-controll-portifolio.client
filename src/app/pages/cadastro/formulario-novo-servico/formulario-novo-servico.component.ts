import { Component, inject } from '@angular/core';
import { Clientes } from 'src/app/model/cliente';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Servico } from 'src/app/model/servico';

@Component({
  selector: 'app-formulario-novo-servico',
  templateUrl: './formulario-novo-servico.component.html',
  styleUrls: ['./formulario-novo-servico.component.css']
})
export class FormularioNovoServicoComponent {
 dadosC: any;
 novoServico: any[] = []

 formBuilder = inject(FormBuilder)
 servico = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      data: ['', Validators.required],
      bike: ['', [Validators.required, Validators.minLength(3)]],
      valor: [null, [Validators.required, Validators.min(1)]],
      maisInfo: ['']
})


  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){
    this.dadosC = this.cadastroComponent.clientesEditveis[0]
        console.log(this.dadosC)

  }

  enviarDados(){ 
    
    this.novoServico.push(this.servico.value)
    this.dadosC.servico = this.novoServico
    this.cadastroService.updade(this.dadosC, this.dadosC.id).subscribe({
      next: cliente =>{
        console.log(cliente)
            this.cadastroComponent.ngOnInit()
            this.cadastroComponent.fecharForm()
      },
      error(err) {
        console.log(err)
      },
    })

  }
  
  fecharForm(){
    this.cadastroComponent.fecharForm()
  }
}

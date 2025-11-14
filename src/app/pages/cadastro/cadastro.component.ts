import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/model/cliente';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [CadastroService]
})

export class CadastroComponent implements OnInit{

  indexForms: boolean = false
  indexMain: boolean = true
  indexEdit: boolean = false
  indexMenssages: boolean = false
  indexFormsService: boolean = false
  classeFicha:string = ""
  clientesCadastrados!: Clientes[];
  clientesEditveis: any[] = []
  habBTNEdit: boolean = true
  copiaClientesCadastrados: any[] = []
  historicoServicosAtivo: boolean = true
  loading$!: Observable<boolean>;
  
constructor(private router: Router, private cadastroService: CadastroService){
  this.loading$ = this.cadastroService.isLoading
}

ngOnInit(){
  this.cadastroService.findAll().subscribe({
    next: clientes => {
      this.clientesCadastrados = clientes
      this.clientesCadastrados.map(e=>{
        e.servico[e.servico.length - 1].isVisible = true
      })
    },
    error: error => {
      console.error(error);
    }
  })

}

findByNome(nome: any){
  this.cadastroService.findBynome(nome.target.value).subscribe({
    next: clientes =>{
            this.clientesCadastrados = clientes
            this.clientesCadastrados.map(e=>{
            e.servico[e.servico.length - 1].isVisible = true
      })
    }
  })

}


habilitarEdit(i: number){
  this.habBTNEdit = false

  if( this.clientesEditveis.length > 0){
    this.clientesEditveis.pop()
  }

  this.clientesEditveis.push(this.clientesCadastrados[i])
}
abrirForm(){
  this.indexForms = true
  this.indexMain =false
}

abrirFormEdit(){
  this.indexEdit = true
  this.indexMain = false
}

abrirFormNovoServico(){
  this.indexFormsService = true
  this.indexMain = false
}

fecharForm(){
  this.indexFormsService = false
  this.indexForms = false
  this.indexEdit = false
  this.indexMain = true
  if(this.indexMain){
    this.habBTNEdit = true
  }
}


abrirFicha(classe: string, ficha: any){
  ficha.classList.toggle(classe)
 
}

navegarHome(){
  this.router.navigate(['/home'])
}

removerCadastro(){
  this.indexMenssages = true
  this.indexMain = false
  
}

moverHistorico(i: number){
  let arr = this.clientesCadastrados[i].servico
  let p = arr.pop()
  
  if (p!=undefined){
    p.isVisible = false
    arr.unshift(p)
  }

  arr[arr.length - 1].isVisible = true

}


}

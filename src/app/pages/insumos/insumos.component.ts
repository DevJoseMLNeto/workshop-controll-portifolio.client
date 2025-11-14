import { Component} from '@angular/core';
import { OnInit} from '@angular/core';
import { Insumos } from 'src/app/model/insumo';
import { Router } from '@angular/router';
import { InsumosService } from 'src/app/service/insumos.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit{

insumoCadastrado!: Insumos[];
insumoEditavel!: Insumos;
indexFormularioAdd: boolean = false
indexFormularioEditAdd: boolean = false
indexMain: boolean = true
isLoading$!: Observable<boolean>;

constructor(private router: Router, private insumoService: InsumosService){
  this.isLoading$ = this.insumoService.isLoading;
}

ngOnInit(): void {
  this.insumoService.getAll().subscribe({
    next: insumos => {
      this.insumoCadastrado = insumos
      console.log(this.insumoCadastrado)
    },
    error: err => {
      console.log(err)
    }
  })
}

ExibirEliminate(event1: MouseEvent){
   const card1 = event1.currentTarget as HTMLElement;
   const primeiroFilho = card1.firstElementChild!.children[0]as HTMLElement;
   const card2 = event1.currentTarget as HTMLElement;
   const segundoFilho = card2.firstElementChild!.children[1] as HTMLElement;
   const card3 = event1.currentTarget as HTMLElement;
   const terceiroFilho = card3.firstElementChild!.children[2] as HTMLElement;
   segundoFilho.classList.toggle('eliminateActive')
   primeiroFilho.classList.toggle('eliminateActive')
   terceiroFilho.classList.toggle('eliminateActive')

}

removerEliminate(event1: MouseEvent){
   const card1 = event1.currentTarget as HTMLElement;
   const primeiroFilho = card1.firstElementChild!.children[0]as HTMLElement;
   const card2 = event1.currentTarget as HTMLElement;
   const segundoFilho = card2.firstElementChild!.children[1] as HTMLElement;
   const card3 = event1.currentTarget as HTMLElement;
   const terceiroFilho = card3.firstElementChild!.children[2] as HTMLElement;
   segundoFilho.classList.toggle('eliminateActive')
   primeiroFilho.classList.toggle('eliminateActive')
   terceiroFilho.classList.toggle('eliminateActive')
}

enviarInsumoEditavel(insumos: Insumos){
  this.insumoEditavel = insumos;
  this.abrirFormsEdit()
}

apagarInsumo(id: number){

this.insumoService.deleteById(id).subscribe({
  next: menssagem => {
    console.log(menssagem)
    this.fecharForms();
    this.ngOnInit();
  },
  error: err => {
    console.error(err);

  }
})
}

cancelarInsumo(insumo: Insumos){
if(insumo.disponibilidade){
  insumo.disponibilidade = false
}else{
  insumo.disponibilidade = true
}
  this.insumoService.updateColumnById(insumo.id, insumo.disponibilidade).subscribe({
    next: menssagem => {
      
    },
    error: err => {
      console.error(err)
    }
  })
}

abrirForms(){
  this.indexFormularioAdd = true
  this.indexMain = false
}
abrirFormsEdit(){
  this.indexFormularioEditAdd = true
  this.indexMain = false
}

fecharForms(){
  this.indexFormularioEditAdd = false
  this.indexFormularioAdd = false
  this.indexMain = true
}

retornarHome(){
  this.router.navigate(['/home'])
}


}

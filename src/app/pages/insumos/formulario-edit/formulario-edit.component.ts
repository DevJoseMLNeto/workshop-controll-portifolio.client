import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InsumosComponent } from '../insumos.component';
import { InsumosService } from 'src/app/service/insumos.service';
import { Insumos } from 'src/app/model/insumo';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.css']
})
export class FormularioEditComponent {
 insumo!: any;
 insumoEditavel!: Insumos;
  fb = inject(FormBuilder)
  formInsumos: any;

  constructor(private insumosComponent: InsumosComponent, private insumosService: InsumosService){

  }



  ngOnInit(){
    this.insumoEditavel = this.insumosComponent.insumoEditavel

     this.formInsumos = this.fb.group({
    nome: [this.insumoEditavel.nome, [Validators.required, Validators.minLength(3)]],
    marca: [this.insumoEditavel.marca,[Validators.required, Validators.minLength(3)]],
    descricao: [this.insumoEditavel.descricao, [Validators.required, Validators.minLength(5)]],
    peso: [this.insumoEditavel.peso, Validators.required],
    valor: [this.insumoEditavel.valor, Validators.required],
    disponibilidade: [this.insumoEditavel.disponibilidade]
  })
  }

  fecharForm(){
    this.insumosComponent.fecharForms()
  }

  updateById(){
    if(this.formInsumos.valid){
      this.insumo = this.formInsumos.value
      this.insumo.id = this.insumoEditavel.id
    this.insumosService.updateById(this.insumo).subscribe({
      next: menssagem =>{
        this.insumosComponent.ngOnInit()
        this.fecharForm()
      },
      error: err => {
        console.log(err)
      }
    })
    }
  }
}

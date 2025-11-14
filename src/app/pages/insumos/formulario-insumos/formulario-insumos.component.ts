import { Component, inject } from '@angular/core';
import { InsumosComponent } from '../insumos.component';
import { OnInit } from '@angular/core';
import { Insumos } from 'src/app/model/insumo';
import { InsumosService } from 'src/app/service/insumos.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-insumos',
  templateUrl: './formulario-insumos.component.html',
  styleUrls: ['./formulario-insumos.component.css']
})

export class FormularioInsumosComponent implements OnInit{
  insumo!: any;
  fb = inject(FormBuilder)
  formInsumos = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
	  marca: ['', [Validators.required, Validators.minLength(3)]],
	  descricao: ['', [Validators.required, Validators.minLength(5)]],
	  peso: ['', Validators.required],
    valor: [null, Validators.required],
    disponibilidade: [true]
  })

  constructor(private insumosComponent: InsumosComponent, private insumosService: InsumosService){

  }



  ngOnInit(){

  }

  fecharForm(){
    this.insumosComponent.fecharForms()
  }

  save(){
    if(this.formInsumos.valid){
      this.insumo = this.formInsumos.value
    this.insumosService.save(this.insumo).subscribe({
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

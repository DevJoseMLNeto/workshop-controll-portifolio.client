import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContabioComponent } from '../contabio.component';
import { ContabioService } from 'src/app/service/contabio.service';
import { FormBuilder } from '@angular/forms';
import { Saida } from 'src/app/model/contabio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formBuilder = inject(FormBuilder)
  formSendSaida = this.formBuilder.group({
    fator: [''],
    valor: [null],
    data: ['']
  })
  saida: any;

  constructor(private router : Router, private contabioService : ContabioService){

  }

  ngOnInit(): void {
    
  }

  enviarForm(){
    this.saida = this.formSendSaida.value
    this.contabioService.save(this.saida).subscribe({
      next : send => {
        this.router.navigate(['/contabio'])
      },
      error: err => {

      }
    })
  }


  fecharForm(){
    this.router.navigate(['/contabio'])
  }

}

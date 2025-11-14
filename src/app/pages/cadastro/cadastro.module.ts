import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioEdicaoComponent } from './formulario-edicao/formulario-edicao.component';
import { MenssagesComponent } from './menssages/menssages.component';
import { FormularioNovoServicoComponent } from './formulario-novo-servico/formulario-novo-servico.component';

@NgModule({
  declarations: [
    CadastroComponent,
    FormulariosComponent,
    FormularioEdicaoComponent,
    MenssagesComponent,
    FormularioNovoServicoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports:[
    CadastroComponent,
    FormulariosComponent,
    MenssagesComponent
  ]
})
export class CadastroModule { }

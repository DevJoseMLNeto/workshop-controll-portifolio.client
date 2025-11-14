import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsumosComponent } from './insumos.component';
import { FormularioInsumosComponent } from './formulario-insumos/formulario-insumos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioEditComponent } from './formulario-edit/formulario-edit.component';

@NgModule({
  declarations: [
    InsumosComponent,
    FormularioInsumosComponent,
    FormularioEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    InsumosComponent,
    FormularioInsumosComponent

  ]
})
export class InsumosModule { }

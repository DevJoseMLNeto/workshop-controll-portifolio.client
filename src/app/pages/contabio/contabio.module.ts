import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabioComponent } from './contabio.component';
import { GraficosComponent } from './graficos/graficos.component';
import { GraficoMensalComponent } from './grafico-mensal/grafico-mensal.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContabioComponent,
    GraficosComponent,
    GraficoMensalComponent,
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ContabioComponent
  ]
})
export class ContabioModule { }

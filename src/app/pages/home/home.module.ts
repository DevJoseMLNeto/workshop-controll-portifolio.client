import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';



@NgModule({
  declarations: [
    HomeComponent,
    FuncionalidadesComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HomeComponent
  ]
})
export class HomeModule { }

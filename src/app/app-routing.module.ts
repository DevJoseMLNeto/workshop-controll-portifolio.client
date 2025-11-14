import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { ContabioComponent } from './pages/contabio/contabio.component';
import { FormularioComponent } from './pages/contabio/formulario/formulario.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '',  redirectTo: 'login', pathMatch: 'prefix'},
  {path:'login', component: LoginComponent, pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'insumos', component: InsumosComponent},
  {path:'contabio', component:ContabioComponent},
  {path:'saida', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

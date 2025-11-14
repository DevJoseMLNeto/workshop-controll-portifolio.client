import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InsumosModule } from './pages/insumos/insumos.module';
import { ContabioModule } from './pages/contabio/contabio.module';
import { SharedModule } from "./pages/shared/shared.module";
import { HttpClientModule, withInterceptors } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { LoginModule } from './pages/login/login.module';
import { provideHttpClient } from '@angular/common/http';
import { meuhttpInterceptor } from './auth/http-interceptor.service';

@NgModule({

  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CadastroModule,
    FormsModule,
    InsumosModule,
    ContabioModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    NgChartsModule,
    LoginModule,
    
],
   providers: [
    provideHttpClient(withInterceptors([meuhttpInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

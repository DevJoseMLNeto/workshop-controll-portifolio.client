import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.css']
})
export class FuncionalidadesComponent {
  constructor(private router: Router){}

  principal = 1
  cadastro = 2
  insumo = 3
  contabio = 4
  arrFuntions = [this.principal, this.cadastro, this.insumo, this.contabio]
  
  objFunction = {
    principal: true,
    cadastro: false,
    insumo : false,
    contabio: false
  }

  
  ValidationFunctionEnter(index: boolean, functionAtiva: Number ){
    if(!index){
      index = true
      this.objFunction.principal=false
    }
    if(functionAtiva == 2){
      this.objFunction.cadastro = index
    }else if(functionAtiva == 3){
      this.objFunction.insumo = index
    }else if(functionAtiva == 4){
      this.objFunction.contabio = index
    }
    
  }
  
  ValidationFunctionLeave(index:boolean, functionAtiva:number){
    if(index){
      index = false
      this.objFunction.principal=true
    }
    if(functionAtiva == 2){
      this.objFunction.cadastro = index
    }else if(functionAtiva == 3){
      this.objFunction.insumo = index
    }else if(functionAtiva == 4){
      this.objFunction.contabio = index
    }

  }

  
  nextPage(page: string){
    this.router.navigate(['./'+ page])
  }
  
}

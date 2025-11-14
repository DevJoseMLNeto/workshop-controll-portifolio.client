import { Component, OnInit, ViewChild } from '@angular/core';
import { Clientes } from 'src/app/model/cliente';
import { CaixaData, Entrada, Saida } from 'src/app/model/contabio';
import { CadastroService } from 'src/app/service/cadastro.service';
import { ContabioService } from 'src/app/service/contabio.service';
import { GraficosComponent } from './graficos/graficos.component';
import { Router } from '@angular/router';
import { GraficoMensalComponent } from './grafico-mensal/grafico-mensal.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contabio',
  templateUrl: './contabio.component.html',
  styleUrls: ['./contabio.component.css']
})
export class ContabioComponent implements OnInit{

  entrada!: Entrada[];
  saida!: Saida[];
  caixa!: CaixaData[];
  caixaAtual: CaixaData =  { data: '', entrada: 0, saida: 0, total: 0 };
  dataAtual = new Date().toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' });
  loading$!: Observable<boolean>;
  @ViewChild(GraficosComponent) graficosComponent!: GraficosComponent;
  @ViewChild(GraficoMensalComponent) GraficoMensalComponent!: GraficoMensalComponent;
  meses = {
    janeiro: 0,
    fevereiro: 0,
    marco: 0,
    abril: 0,
    maio: 0,
    junho: 0,
    julho: 0,
    agosto: 0,
    setembro: 0,
    outubro: 0,
    novembro: 0,
    dezembro: 0
  }

  constructor(private contabioService: ContabioService, private router:Router){
    this.loading$ = this.contabioService.isLoading
  }


  ngOnInit(): void {
    this.findCaixa()
    this.findEntrada()
    this.findSaida()
  }


  findEntrada(){
    this.contabioService.findAllEntrada().subscribe({
      next: valores => {
        this.entrada = valores
      },
      error: err => {
        console.error(err)
      }
    })
  }
  findSaida(){
    this.contabioService.findAllSaida().subscribe({
      next: valores => {
        this.saida = valores
      },
      error: err => {
        console.error(err)
      }
    })
  }

  removerSaida(id: number){

    this.contabioService.removeSaida(id).subscribe({
      next:valores =>{
        console.log(valores)
        let atualURL = this.router.url
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([atualURL]);
  });
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  findCaixa(){
    console.log("OK")
    this.contabioService.findAll().subscribe({
      next: valores => {
        console.log(valores)
        valores.forEach((e,i,v)=>{
          let date = e.data.slice(0,2)
          console.log(date)
          switch (date){
            case "01":
              this.meses.janeiro = e.total
              break;
            case "02":
              this.meses.fevereiro = e.total
              break;
            case "03":
              this.meses.marco = e.total
              break;
            case "04":
              this.meses.abril = e.total
              break;
            case "05":
              this.meses.maio = e.total
              break;
            case "06":
              this.meses.junho = e.total
              break;
            case "07":
              this.meses.julho = e.total
              break;
            case "08":
              this.meses.agosto = e.total
              break;
            case "09":
              this.meses.setembro = e.total
              break;
            case "10":
              this.meses.outubro = e.total
              break;
            case "11":
              this.meses.novembro = e.total
              break;
            case "12":
              this.meses.dezembro = e.total
              break;
            default:
              break;
          }


        })
        this.caixa = valores
        this.caixaAtual = this.caixa.find(elm => elm.data === this.dataAtual) || { data: '', entrada: 0, saida: 0, total: 0 }

        if(this.GraficoMensalComponent){
          this.GraficoMensalComponent.atualizarGrafico()
        }
        
        if (this.graficosComponent) {
        this.graficosComponent.atualizarGrafico();
      }
      },
      error: err => {
        console.error(err)
      }
    })
  }
  


  navegar(page: string){
    this.router.navigate(['./'+ page])
  }


  capitar(filtro: any){
    console.log(filtro.target.value)
  }









}

import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { ContabioComponent } from '../contabio.component';

@Component({
  selector: 'app-grafico-mensal',
  templateUrl: './grafico-mensal.component.html',
  styleUrls: ['./grafico-mensal.component.css']
})
export class GraficoMensalComponent implements OnInit {

constructor(private contabioComponent : ContabioComponent){
}

ngOnInit(): void {
  Chart.register(ChartDataLabels)
}


atualizarGrafico(){
  let graf = document.getElementById("graficoMensal")

  new Chart(graf as ChartItem, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      datasets: [{
        label: '',
        barPercentage: 0.8,
        barThickness: 12,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [this.contabioComponent.meses.janeiro, this.contabioComponent.meses.fevereiro, this.contabioComponent.meses.marco, this.contabioComponent.meses.abril, this.contabioComponent.meses.maio, this.contabioComponent.meses.junho, this.contabioComponent.meses.julho, this.contabioComponent.meses.agosto, this.contabioComponent.meses.setembro, this.contabioComponent.meses.outubro, this.contabioComponent.meses.novembro, this.contabioComponent.meses.dezembro],
        backgroundColor: ['#00ffff'],
        
      }],
      
    },
    options: {
      plugins:{
        title: {
          display: true,
          position: 'top',
          text: this.contabioComponent.dataAtual.slice(3)
        }
      },
      events: []
    }
  })
}


}

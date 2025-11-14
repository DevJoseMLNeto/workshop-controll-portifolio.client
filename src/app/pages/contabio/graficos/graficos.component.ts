import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem, PieController } from 'chart.js';
import { ContabioComponent } from '../contabio.component';
import ChartDataLabels from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {



constructor(private contabioComponent: ContabioComponent){


}

ngOnInit(){
Chart.register(ChartDataLabels)


}




atualizarGrafico(){
  let graf = document.getElementById("grafico")

  new Chart(graf as ChartItem, {
      type: 'pie',
    data: {
      labels: ['Entrada','Saida'],
      datasets: [{
        label: '',
        data: [this.contabioComponent.caixaAtual.entrada,this.contabioComponent.caixaAtual.saida],
        borderWidth: 1,
        backgroundColor: ['#14FF30','#FFF700' ]
      }]
    },
    options: {
      plugins:{
        title: {
          display: true,
          position: 'top',
          text: "Total mensal"
        }
      },
      events: []
    }
  })  
}


}

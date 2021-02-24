import { Component, Input, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AppConfig} from 'src/app/models/accountModels';
import {ConfigService} from 'src/app/services/config.service';
import { GraphData } from 'src/app/models/accountModels';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() graphData: GraphData;
  data: any;  
  chartOptions: any;
    
  subscription: Subscription;

  config: AppConfig;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {      
    this.data = {
        labels: ['A','B','C', 'D'],
        datasets: [
            {
                data: [this.graphData.BTC, this.graphData.ETH, this.graphData.EUR, this.graphData.CNY],
                
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FFCE59"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#36A2E9"
                ]
            }
        ]    
    };
    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe(config => {
        this.config = config;
        this.updateChartOptions();
    });
  }
  updateChartOptions() {
    this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
}

getLightTheme() {
    return {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        }
    }
}

getDarkTheme() {
    return {
        legend: {
            labels: {
                fontColor: '#ebedef'
            }
        }
    }
}
  
}

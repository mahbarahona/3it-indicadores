import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input('data') data!:any 


   barChartOptions:any
   barChartLabels!:string[]
   barChartLegend = true
   barChartData:any

  constructor() {

   }

  ngOnInit(): void {
    console.log('line chart',this.data)
    
  this.barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  this.barChartLabels = this.data!.labels;
  this.barChartLegend = true;

  this.barChartData = [
    { data:this.data.data, label:this.data.legend },
  ];
  }


}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input('data') data!:any 

  @Input('amount') amount:number = 10

   barChartOptions:any
   barChartLabels!:string[]
   barChartLegend = true
   barChartData:any

  constructor() {

   }

  ngOnInit(): void {

    this.data.data = this.data.data.slice(0,this.amount)
    this.data.labels = this.data.labels.slice(0,this.amount)
    // console.log('chart',this.data)
  this.barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scaleShowValues: true,
    
  };
  this.barChartLabels = this.data!.labels;
  this.barChartLegend = true;

  this.barChartData = [
    { data:this.data.data, label:this.data.legend },
  ];
  }


}

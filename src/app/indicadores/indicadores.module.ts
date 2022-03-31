import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LineChartComponent } from './components/graphs/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HistoryPageComponent,
    DetailPageComponent,
    ListPageComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    NgChartsModule 
  ]
})
export class IndicadoresModule { }

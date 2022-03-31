import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LineChartComponent } from './components/graphs/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SharedModule } from '../shared/shared.module';
import { IndicadoresHeaderComponent } from './components/indicadores-header/indicadores-header.component';

@NgModule({
  declarations: [
    HistoryPageComponent,
    DetailPageComponent,
    ListPageComponent,
    LineChartComponent,
    IndicadoresHeaderComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    NgChartsModule ,
    MatProgressBarModule,
    SharedModule
  ]
})
export class IndicadoresModule { }

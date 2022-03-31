import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path:'',
    component:ListPageComponent
  },
  {
    path:'tipo/:tipo',
    component:DetailPageComponent
  },
  {
    path:'history/:tipo',
    component:HistoryPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }

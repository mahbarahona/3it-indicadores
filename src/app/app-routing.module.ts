import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'i',
    loadChildren: ()=> import('./indicadores/indicadores.module').then(m => m.IndicadoresModule)
  },
  {
    path:'',
    redirectTo:'i',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

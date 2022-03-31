import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, filter, map, Observable, tap } from 'rxjs';
import { IndicadoresActionsService } from '../../actions/indicadores-actions.service';
import { IndicadoresStateService } from '../../state/indicadores-state.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  chart:any
  indicador:any
  tipo:string = ''

  constructor(private route:ActivatedRoute, public state:IndicadoresStateService,private actions:IndicadoresActionsService) {
   }

  ngOnInit(): void {
    
    this.route.paramMap
    .pipe(
      map( params => params.get('tipo') || ''),
      filter( tipo => tipo !== ''),
      tap( tipo => this.tipo = tipo),
      concatMap( tipo =>{ return this.actions.getIndicadoresHistory(tipo) })
      )
    .subscribe( indicador =>{

       this.indicador = indicador
        this.chart = {
          data:indicador.history.map( (i:any) => i.valor),
          labels:indicador.history.map( (i:any) => {
            let date = new Date()

            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()

            if(month < 10){
              return`${day}-0${month}-${year}`
            }else{
              return `${day}-${month}-${year}`
            }

          }),
          legend:indicador.unidad_medida
        }
      }
    ) 

  }


}

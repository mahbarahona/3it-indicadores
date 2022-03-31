import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, filter, map, tap } from 'rxjs';
import { IndicadoresActionsService } from '../../actions/indicadores-actions.service';
import { IndicadoresStateService } from '../../state/indicadores-state.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  indicador:any
  
  constructor(
    private route:ActivatedRoute, 
    public state:IndicadoresStateService,
    private actions:IndicadoresActionsService
    ) {

   }

ngOnInit(): void {
  this.route.paramMap
  .pipe(
    map( params => params.get('tipo') || ''),
    filter( tipo => tipo !== ''),
    concatMap( tipo =>{ return this.actions.getIndicadoresHistory(tipo) })
    )
  .subscribe( indicador => this.indicador = indicador)

  }
}

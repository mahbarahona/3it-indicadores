import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, filter, map, Observable } from 'rxjs';
import { IndicadoresStateService } from '../../state/indicadores-state.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  indicador$:Observable<any> = new Observable()
  constructor(private route:ActivatedRoute, private state:IndicadoresStateService) {
   }

  ngOnInit(): void {
    
    this.indicador$ = this.route.paramMap
    .pipe(
      map( params => params.get('tipo') || ''),
      filter( tipo => tipo !== ''),
      concatMap( tipo =>{ return this.state.getIndicador(tipo) })
    )
      
  }
}

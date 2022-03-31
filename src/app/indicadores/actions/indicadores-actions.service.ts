import { Injectable } from '@angular/core';
import { IndicadoresAdapterService } from '../adapter/indicadores-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresActionsService {

  constructor(private adapter:IndicadoresAdapterService) { }

  getIndicadores(){
    this.adapter.getIndicadores()
  }
  
  getIndicadoresHistory(tipo:string){
    return this.adapter.getIndicadoresHistory(tipo)
  }
}

import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { UiService } from 'src/app/ui/ui.service';
import { IndicadoresStateService } from '../state/indicadores-state.service';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresAdapterService {

  constructor(private state:IndicadoresStateService,private http:HttpService,private ui:UiService) { }

  getIndicadores(){
    if(this.state.canGetIndicadores()){
      this.ui.setLoading(true)
      this.getIndicadoresMock()

      // this.getIndicadoresAPI()
    }
  }

  indicadorHaveHistory(tipo:string){
    return this.state.indicadorHaveHistory(tipo)
  }
  private getIndicadoresAPI(){
    const url = 'https://mindicador.cl/api'
    this.http.get(url)
    .pipe(

    )
    .subscribe( indicadores => {
      this.state.setIndicadores(indicadores)
    }) 

  }
  private getIndicadoresMock(){
    const url = `assets/mock/get_indicadores.json`
    this.http.get(url)
    .pipe(

    )
    .subscribe( indicadores => {
      this.state.setIndicadores(indicadores)
      this.ui.setLoading(false)
    }) 

  }



  getIndicadoresHistory(tipo:string){
    this.ui.setLoading(true)
    // return this.getIndicadoresHistoryMock(tipo);
    return this.getIndicadoresHistoryAPI(tipo);

    
  }
  private getIndicadoresHistoryMock(tipo:string){
    const url = `assets/mock/get_indicador.json`
    return this.http.get(url)
    .pipe(
      map( (indicador:any) => {
        
        indicador.chart = indicador.serie.reverse().slice(0,10)
        indicador.history = indicador.serie
        indicador.fecha = indicador.history[indicador.history.length - 1].fecha
        indicador.valor = indicador.history[indicador.history.length - 1].valor

        this.state.setHistory(indicador.codigo,indicador.history)
        return indicador
      })
    )
  } 
  private getIndicadoresHistoryAPI(tipo:string){

    const url = `https://mindicador.cl/api/${tipo}`
    return this.http.get(url)
    .pipe(
      map( (indicador:any) =>  {

        indicador.chart = indicador.serie.reverse().slice(0,10)
        indicador.history = indicador.serie
        indicador.fecha = indicador.history[indicador.history.length - 1].fecha
        indicador.valor = indicador.history[indicador.history.length - 1].valor

        this.state.setHistory(indicador.codigo,indicador.history)
        this.ui.setLoading(false)
        return indicador

      })
    )
  }
}

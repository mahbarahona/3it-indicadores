import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { IndicadoresStateService } from '../state/indicadores-state.service';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresAdapterService {

  constructor(private state:IndicadoresStateService,private http:HttpService) { }

  getIndicadores(){
    if(this.state.isEmpty()){
      this.getIndicadoresMock()
      // this.getIndicadoresAPI()
    }
  }
  haveIndicadores(){
    return this.state.isEmpty()
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
    }) 

  }



  getIndicadoresHistory(tipo:string){
    //check if have history
  
    return this.getIndicadoresHistoryMock(tipo);
    // return this.getIndicadoresHistoryAPI(tipo)
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
    this.http.get(url)
    .pipe(
      map( (indicador:any) =>  {

        const {codigo, history} = indicador
        this.state.setHistory(codigo,history)


        indicador.chart = indicador.serie.slice(0,10)
        indicador.history = indicador.serie
        return indicador

      })
    )
  }
}

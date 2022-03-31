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
    const url = `http://localhost:4300/assets/mock/get_indicadores.json`
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
    const url = `http://localhost:4300/assets/mock/get_indicador.json`
    return this.http.get(url)
    .pipe(
      map( (indicador:any) => {
        return {
          tipo,
          history: indicador.serie
        }
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


        return {
          tipo: indicador.codigo,
          history: indicador.serie
        }
      })
    )
  }
}

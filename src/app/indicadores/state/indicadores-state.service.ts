import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresStateService {

  private _indicadores = new BehaviorSubject<any>([])
  indicadores = this._indicadores.asObservable()

  constructor() {
   }

  getIndicador(tipo:string){

    let indicador = this._indicadores.getValue().find(( item:any) => item.codigo === tipo )     
    indicador.chart = indicador.history
    console.log('state', {indicador})
      return of(indicador)
  }

  setIndicadores(indicadores:any){

    const newState =  Object.entries(indicadores)
                      .filter( arr => arr.length > 1)
                      .map( arr => arr[1])
                      .filter( item => typeof item === 'object' )

    this._indicadores.next(newState)

  }
  setHistory(tipo:string,history:any){
    const currentIndicadores = this._indicadores.value
    let currentTipo = currentIndicadores.find( (item:any) => item.codigo === tipo)


    const newState = {
      ...currentTipo,
      history
    }


    const newList = currentIndicadores.filter( (item:any) => item.codigo !== tipo )


    this._indicadores.next(
     [
       ...newList,
          newState
     ]
    )

  }

  isEmpty(){
    return this._indicadores.value.length == 0
  }

  indicadorHaveHistory(tipo:string){
    const indicador = this._indicadores.value.find((indicador:any) => indicador.codigo === tipo )
    console.log('have history', indicador?.history && indicador.history.length > 0)
    return !!indicador?.history && indicador.history.length > 0
  }
}

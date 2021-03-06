import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresStateService {

  private _indicadores = new BehaviorSubject<any>([])
  indicadores = this._indicadores.asObservable()
  private _isLoading = new BehaviorSubject<any>(false)
  isLoading = this._isLoading.asObservable()

  constructor() {
   }
  
  setLoading(newState:boolean){
    this._isLoading.next(newState)
  }
  getIndicador(tipo:string){

    let indicador = this._indicadores.getValue().find(( item:any) => item.codigo === tipo )     
    indicador.chart = indicador.history
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

  canGetIndicadores(){
    return this.isEmpty() || this._indicadores.value.length < 2
  }

  indicadorHaveHistory(tipo:string){
    const indicador = this._indicadores.value.find((indicador:any) => indicador.codigo === tipo )
    return !!indicador?.history && indicador.history.length > 0
  }
}

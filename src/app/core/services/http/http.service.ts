import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  get(url:string,options?:any){
    return this.http.get(url,options)
    .pipe(
      catchError( (e) =>{
        let response = this.createErrorResponse(e)
        return of(response)
      })
    )
  }
  post(url:string,data:any,options?:any){
    return this.http.post(url,data,options)
    .pipe(
      catchError( (e) =>{
        let response = this.createErrorResponse(e)
        return of(response)
      })
    )
  }
  put(url:string,data:any,options?:any){
    return this.http.put(url,data,options)
    .pipe(
      catchError( (e) =>{
        let response = this.createErrorResponse(e)
        return of(response)
      })
    )
  }
  delete(url:string,options?:any){
    return this.http.delete(url,options)
    .pipe(
      catchError( (e) =>{
        let response = this.createErrorResponse(e)
        return of(response)
      })
    )
  }

  private createErrorResponse(error:any){

    //switch between error status to get right type
    return {
      error: {
        type: HTTP_ERROR_TYPE.UNEXPECTED,
        message: HTTP_ERROR_TYPE_MESSAGE.UNEXPECTED,      
      }

    }
  }
}

export enum HTTP_ERROR_TYPE{
  UNEXPECTED='UNEXPECTED'
}
export enum HTTP_ERROR_TYPE_MESSAGE{
  UNEXPECTED='UNEXPECTED'
}
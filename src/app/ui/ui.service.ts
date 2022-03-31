import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private _isLoading = new BehaviorSubject<any>(false)
  isLoading = this._isLoading.asObservable()
  constructor() { }

  setLoading(newState:boolean){
    this._isLoading.next(newState)
  }
}

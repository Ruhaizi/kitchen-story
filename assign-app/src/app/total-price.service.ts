import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {
  total;
  setTotal(total){
    this.total=total;
  }
  getTotal(){
    return this.total;
  }

  constructor() { }
}

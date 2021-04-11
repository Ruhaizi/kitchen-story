import { Injectable } from '@angular/core';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class SelecteditemsService {

obj:Array<Object>
setData(obj){
  this.obj=obj
}
getData(){
  return this.obj;
}

}

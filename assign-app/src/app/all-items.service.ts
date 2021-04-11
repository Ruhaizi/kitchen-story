import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllItemsService {

  obj:Array<any>=[ 
    { id: 11, name: 'Bread', Price: 50 },
    { id: 12, name: 'Milk' , Price: 30},
    { id: 13, name: 'Pasta' , Price: 35},
    { id: 14, name: 'Instant Soup' , Price: 45 },
    { id: 15, name: 'Flour' , Price: 55},
    { id: 16, name: 'Rice' , Price: 60},
    { id: 17, name: 'Apples' , Price: 80},
    { id: 18, name: 'Kiwis' , Price: 110},
    { id: 19, name: 'Capsicum' , Price: 45},
    { id: 20, name: 'Tomato' , Price: 20}];
setObj(obj){
  this.obj=obj
}
getObj(){
  return this.obj;
}

  constructor() { }
}

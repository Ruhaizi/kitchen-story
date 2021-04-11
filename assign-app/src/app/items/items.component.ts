import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { SelecteditemsService } from '../selecteditems.service';
import { TotalPriceService } from '../total-price.service';
import { AllItemsService } from '../all-items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  template: `<a (click)="navigateWithState()">go to billing page</a>`,
  
})
export class ItemsComponent  {
 
  
 @Output() newItemEvent =new EventEmitter<Array<Object>>();
 addNewItem(value:Array<Object>) {
   this.newItemEvent.emit(value);
 }

   x=0;
   total =0;
   public listselected:Array<Object>=[];

   title = 'Food Items';
   searchText;
   heroes:any;
  //  public heroes : any= [
  //     { id: 11, name: 'Bread', Price: 50 },
  //     { id: 12, name: 'Milk' , Price: 30},
  //     { id: 13, name: 'Pasta' , Price: 35},
  //     { id: 14, name: 'Instant Soup' , Price: 45 },
  //     { id: 15, name: 'Flour' , Price: 55},
  //     { id: 16, name: 'Rice' , Price: 60},
  //     { id: 17, name: 'Apples' , Price: 80},
  //     { id: 18, name: 'Kiwis' , Price: 110},
  //     { id: 19, name: 'Capsicum' , Price: 45},
  //     { id: 20, name: 'Tomato' , Price: 20}
  //  ];

  public fields: Object = { id: 'number', name:'string', Price:'number' };
     public position='Right';


   selectedHero?:Hero;
   onSelect(hero): void {
       this.selectedHero = hero;
       this.total= this.total + parseInt(hero.Price);
       this.listselected.push(this.selectedHero);
       this.x=this.listselected.length;
       console.log(this.total);
       this.totalprice.setTotal(this.total);

   }

   

 
  
  
  constructor(private myService:SelecteditemsService, private totalprice:TotalPriceService, private _allheroes:AllItemsService) {
   
   }
  // navigateWithState() {
  //   this.router.navigateByUrl('/billing', { listselected });
  // }

  ngOnInit(): void {
    this.heroes=this._allheroes.getObj();
    this.myService.setData(this.listselected);
    this.myService.getData();

   
    // this.heroes=this._selecteditemsService.getitems();
    // this.selectedHero= this._selecteditemsService.getitems();
  }

}


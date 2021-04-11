import { Component, OnInit } from '@angular/core';
import { AllItemsService } from 'src/app/all-items.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {




  public fieldArray: Array<any> = [ 
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
   public newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
        this._allItemsService.setObj(this.fieldArray);
        
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
        this._allItemsService.setObj(this.fieldArray);
        
    }
    

  constructor(private _allItemsService:AllItemsService) { }

  ngOnInit(): void {
    this._allItemsService.setObj(this.fieldArray);
    

  }

}

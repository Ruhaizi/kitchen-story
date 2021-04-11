import { Component,Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelecteditemsService } from 'src/app/selecteditems.service';
import {TotalPriceService} from 'src/app/total-price.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  @Input() list:Array<Object>;

  public total;

  public finalitems=[];
 
  constructor(private _selecteditemsService:SelecteditemsService,private _totalPriceService:TotalPriceService ) { }
  
  ngOnInit(): void {
    this.finalitems= this._selecteditemsService.getData();
    this.total=this._totalPriceService.getTotal();
  }
  buy(){
    if(confirm("Confirm to pay")){
      confirm("ORDER SUCCESSFUL!")
      
    }
  }

}

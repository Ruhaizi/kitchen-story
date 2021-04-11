import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `<ejs-listview id='sample-list' [dataSource]='heroes' [fields]='fields' [showCheckBox]='true' [checkBoxPosition]="position"></ejs-listview>`
})
export class HomeComponent {
 

  constructor() { }

  ngOnInit(): void {
  }

}

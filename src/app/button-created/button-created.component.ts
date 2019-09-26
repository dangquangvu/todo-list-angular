import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-button-created',
  templateUrl: './button-created.component.html',
  styleUrls: ['./button-created.component.css']
})
export class ButtonCreatedComponent implements OnInit  {
    public visiable : boolean = true;
    public date: string = moment().format('YYYY-MM-DD');
  constructor() { }

  ngOnInit() {
    }
    clickbutton(event){
        this.visiable = !this.visiable;
    }
    dateTime(){
        alert(this.date)
    }
}

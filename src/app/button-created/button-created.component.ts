import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-button-created',
  templateUrl: './button-created.component.html',
  styleUrls: ['./button-created.component.css']
})
export class ButtonCreatedComponent implements OnInit  {
    name: string;
    //value : string;
    selectedValue : string ;
    selected : string ;
    description: string;
    cityName: string;
    objectData : any ={};
    arrData : any =[];
    options :any= [
        {value : "AM"},
        {value : "PM"}
    ]
    public visiable : boolean = true;
    public date: string = moment().format('YYYY-MM-DD');
  constructor() { }

    ngOnInit() {
    }

    clickbutton(event){
        this.visiable = !this.visiable;
    }
    onClickSubmit(data) {
        this.selected = this.selectedValue;
        this.objectData = {
            name : data.name,
            des : data.description,
            date : data.date
        }
     }

}

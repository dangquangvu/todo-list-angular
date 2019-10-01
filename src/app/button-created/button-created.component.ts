import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-button-created",
  templateUrl: "./button-created.component.html",
  styleUrls: ["./button-created.component.css"]
})
export class ButtonCreatedComponent implements OnInit {
  name: string;
  selectedValue: string;
  selected: string;
  description: string;
  cityName: string;
  objectData: any = {};
  arrData: any = [];
  radioSelected: string;
  radioSelectedString: string;
  selectBox : string;
  selectedLevel : string;

  options: any = [{ name : 1, value: "AM" }, {name : 2, value: "PM" }];
  @Output()
  newValue = new EventEmitter<object>();

  public checkboxRole = [
    { name: 1, value: "Normal" },
    { name: 2, value: "Not hurry" },
    { name: 3, value: "hurry" }
  ];
  public visiable: boolean = true;

  public date: string = moment().format("YYYY-MM-DD");

  constructor() {}

  ngOnInit() {
    this.name = "vũ đẹp trai";
    this.description = "";
    this.date = this.date;
    this.objectData = {};
    this.selectedValue = this.options[0].value;
  }

  clickSubmit() {
    this.name = "";
    this.description = "";
    this.visiable = !this.visiable;
  }

  clickbutton() {
    this.visiable = !this.visiable;
  }
  onClickSubmit(data) {
    this.selected = this.selectedValue;
    this.objectData = {
      name: data.name,
      des: data.description,
      date: data.date,
      hurry: this.radioSelected,
      pmAm : this.selectedLevel
    };
    this.sentValueButtoncpn(this.objectData);
    this.clickSubmit();
  }
  sentValueButtoncpn(value: object) {
    this.newValue.emit(value);
    console.log(value, 2222222);
  }
  selectedshowval(){
      console.log(this.selectedLevel)
  }
}

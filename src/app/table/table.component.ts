import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  arrData: Array<object>;
  @Input() objectData: any;
  constructor() {}

  ngOnInit() {}

  updateArrObject(objectData){
      this.arrData.push(objectData)
  }

}

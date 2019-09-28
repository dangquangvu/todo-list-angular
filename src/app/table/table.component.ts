import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  arrData: any[];

  addItem(value: object) {
    this.arrData.push(value);
  }

  constructor() {}

  ngOnInit() {}
}

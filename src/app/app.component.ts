import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todolist-angular";
  dataFormInputReceive: object;

  @Output() sentDataTable =new EventEmitter<object>();

  addItem(value : object) {
    this.dataFormInputReceive = value;
  }
  sentData(){
    this.sentDataTable.emit(this.dataFormInputReceive)
  }
}

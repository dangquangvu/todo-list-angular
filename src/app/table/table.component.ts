import { Component, OnInit, Input, SimpleChanges, ElementRef } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  arrData=[];
  @Input() objectData: any;
  dataBind: any;
  public elRef: ElementRef;
  constructor(){}
  index : number = 1;
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
      if(changes){
          this.updateArrObject(this.objectData);
          console.log(this.elRef.nativeElement.parentElement,2222222222222222);
        }
        console.log(changes['objectData'].currentValue)
    }
  updateArrObject(objectData: any) {
    this.arrData.push(objectData);
    console.log(this.arrData)
  }
}

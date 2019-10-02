import { Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  arrData=[];
  @Input() objectData: any;
  @ViewChild("tref", {read: ElementRef,static: false}) tref: ElementRef;
  dataBind: any;
  public elRef: ElementRef;
  constructor(){}
  index : number = 1;
  ngOnInit() {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      this.updateArrObject(this.objectData);
    }
    //console.log(changes['objectData'].currentValue)
  }
  ngAfterViewInit(): void {
    // outputs `I am span`
    //console.log(this.tref.nativeElement.textContent,333333333334);
}
  updateArrObject(objectData: any) {
    this.arrData.push(objectData);
    //console.log(this.arrData)
  }
}

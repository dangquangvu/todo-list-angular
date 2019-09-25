import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-created',
  templateUrl: './button-created.component.html',
  styleUrls: ['./button-created.component.css']
})
export class ButtonCreatedComponent implements OnInit {
    public visiable : boolean = true;
  constructor() { }

  ngOnInit() {
    }
    clickbutton(event){
        this.visiable = !this.visiable;
    }
}

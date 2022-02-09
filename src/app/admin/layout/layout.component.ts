import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public isOpen = true;
  private OpenWidth = 840;

  constructor() { 
    this.isOpen = window.innerWidth>this.OpenWidth?true:false;
    window.onresize = () => {
      this.isOpen = window.innerWidth>this.OpenWidth?true:false;
    }    
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[page2]',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private navi: OnsNavigator, private params: Params) { }

  ngOnInit() {
  }

  pop() {
    this.navi.nativeElement.popPage();
  }

}

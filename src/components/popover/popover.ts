import { Component } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class Popover {

  constructor() {
    console.log('Hello Popover Component');
  }

  private itemSelected(r){
    console.log(r);
  }

}

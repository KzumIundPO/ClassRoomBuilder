import { Component } from '@angular/core';

@Component({
  selector: 'seating',
  templateUrl: 'seating.html'
})
export class Seating {

  constructor() {
    console.log('Hello Popover Component');
  }

  private addNewUser(){
    //POST to User table, hash PW MD5
  }

  private updateAdminStatus(){
    //isAdmin == true
  }

}

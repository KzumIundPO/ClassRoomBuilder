import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-seating',
  templateUrl: 'seating.html',
})
export class Seating {
  
  places = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.places.push({text:"asdasdasd"});
    this.places.push({text: "asdasdasdasd"});
    this.places.push({text: "jonas"});
    this.places.push({text: "boizz"});
    this.places.push({text: "hey man"});
    this.places.push({text: "hanser"});
    console.log(this.places);    
  }

  ionViewDidEnter() {
    
  }

}

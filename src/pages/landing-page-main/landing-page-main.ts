import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Students } from '../students/students';
import { Seating } from '../seating/seating';
import { LandingPage } from '../landing-page/landing-page';
import { Panel } from '../panel/panel';

@IonicPage()
@Component({
  selector: 'page-landing-page-main',
  templateUrl: 'landing-page-main.html',
})
export class LandingPageMain {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToLandingPage(){
    this.navCtrl.push(LandingPage);
  }

  goToSeating(){
    this.navCtrl.push(Seating);
  }

  goToStudents(){
    this.navCtrl.push(Students);
  }

  goToStudent(){
    this.navCtrl.push(Students);
  }

  goToPanel(){
    this.navCtrl.push(Panel);
  }

}

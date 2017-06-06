import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LandingPageMain } from '../landing-page-main/landing-page-main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLandingPageMain(){
    this.navCtrl.push(LandingPageMain);
  }

}

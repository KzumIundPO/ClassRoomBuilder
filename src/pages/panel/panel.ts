import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { globalVariables } from "../home/globalVariables";

@IonicPage()
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html',
})
export class Panel {

    _oldPW = "";
    _newPW = "";
    _newPWConfirm = "";
    _userName = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVariables: globalVariables) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Panel');
  }

  private changePW(){
      //PUT on Password
  }

  private createUser(){
      //POST User only for admin
  }

}
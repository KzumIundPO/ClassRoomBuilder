import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Md5 } from 'ts-md5/dist/md5';

import { globalVariables } from "../home/globalVariables";
import { LandingPageMain } from '../landing-page-main/landing-page-main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  token;
  _password = "";
  _username = "";

  constructor(public navCtrl: NavController, public http: Http, public globalVariables: globalVariables, public md5: Md5) {

  }

  //Hash Password
  private hashPassword(string){
    this.md5.appendStr(string);
    var hashedString = this.md5.end();
    return hashedString;
  }

  goToLandingPageMain(){
    this.navCtrl.push(LandingPageMain);
  }

  //Temp Log In
  /*private getToken(){
    let pw = this.hashPassword(this._password);
    console.log(pw);
    this.http.get('http://lyra.b4zz-pony.de:3000/authentication').map(res => res.json()).subscribe(data => {this.token = data 
    console.log(this.token);
    this.globalVariables.token = this.token;
    console.log(this.globalVariables.token);
    console.log(this._password);
  })
}*/

  private getToken_(){
    let pw = this.hashPassword(this._password);
    this.http.get('http://lyra.b4zz-pony.de:3000/authentication?user=' + this._username + '%pasHash=' + pw).map(res => res.json()).subscribe(data => {this.token = data 
    this.globalVariables.token = this.token;
  })
  }

}

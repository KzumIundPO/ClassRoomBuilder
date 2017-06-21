import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Md5 } from 'ts-md5/dist/md5';
import { ToastController } from 'ionic-angular';

import { globalVariables } from "../home/globalVariables";
import { LandingPageMain } from '../landing-page-main/landing-page-main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _password = "";
  _username = "";
  userInfo = [];
  admin = false;

  constructor(public navCtrl: NavController, public http: Http, public globalVariables: globalVariables, public md5: Md5, public toastCtrl: ToastController) {

  }

  //NAVIGATION -> Landing Page Main
  goToLandingPageMain() {
    if(!this.globalVariables.token){
      let toast = this.toastCtrl.create({
      message: 'Can not Login!',
      duration: 5000
      });
      toast.present();
    }
    else{
      this.navCtrl.push(LandingPageMain);
    }
  }

  //Hash Password
  private hashPassword(string) {
    this.md5.appendStr(string);
    var hashedString = this.md5.end();
    return hashedString;
  }

  //error and response handling
  private getToken() {
        let pw = this.hashPassword(this._password);
        return this.http.get('http://lyra.b4zz-pony.de:3000/authentication?uname=' + this._username + '&passHash=' + pw).map(res => res.json()).catch(this.handleError).subscribe(data => {
        this.userInfo = data;
        this.globalVariables.token = this.userInfo["token"];
        this.globalVariables.isAdmin = this.userInfo["isAdmin"];
        this.globalVariables.accountId = this.userInfo["accountId"];
        console.log(this.globalVariables.token);
        console.log(this.userInfo);
        this.goToLandingPageMain();
      })
  }
   private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { globalVariables } from "../home/globalVariables";
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVariables: globalVariables, public md5: Md5, public http: Http, public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Panel');
  }

  private checkPW(){
    //check PW
    this.md5.appendStr(this._oldPW);
    let hashedString = this.md5.end();
    let oldPWHashed = hashedString;
    // GET for Authentication if returns Token he is allowed to change PW
    /*let userAndPassword = this.http.get('http://lyra.b4zz-pony.de:3000/authentication?uname=' + this._username + '&passHash=' + pw).map(res => res.json()).catch(this.handleError).subscribe(data => {
        this.userInfo = data;})*/
  }

  private changePW(){
      //PUT on Password User endpoint?
      /*this.http.put('http://lyra.b4zz-pony.de:3000/user?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId).map(res => res.json()).catch(this.handleError).subscribe(data => {
        this.userInfo = data;})*/
  }

  private createUser(myEvent){
      //POST User only for admin
      if (this.globalVariables.isAdmin) {
        //create User: define user object, Popup insert into object
          let popover = this.popoverCtrl.create(popover);
          popover.present({
          ev: myEvent
        });
        //this.http.post('http://lyra.b4zz-pony.de:3000/user?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId, this.newUser); 
      } else {
        let toast = this.toastCtrl.create({
        message: 'Not allowed to create User!',
        duration: 3000
        });
        toast.present();
      }
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
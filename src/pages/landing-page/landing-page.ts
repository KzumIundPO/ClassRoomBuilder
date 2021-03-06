import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { globalVariables } from "../home/globalVariables";
import { Seating } from '../seating/seating';
import { AddStudent } from '../../components/addStudent/addStudent';

@IonicPage()
@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html',
})
export class LandingPage {

  students = [];
  classes = [];

  _class = "";
  classIdCreated_ = "";

  //Create Schüler, Class - Name - Picture
  object = {
    "fname": "Teddy",
    "lname": "Test",
    "classId": "1",
    "pathToPicture": "/home/aletuna/bla.jpg"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public globalVariables: globalVariables, public popoverCtrl: PopoverController, public toastCtrl: ToastController) {

  }

  //check Token?
  ionViewDidLoad() {
    console.log("View did load!");
    this.getClass();
    if (!this.globalVariables.token) {
      let toast = this.toastCtrl.create({
        message: 'ERR!',
        duration: 3000
      });
      toast.present();
    }
    else {
      console.log();
    }
  }

  private getClass() {
    return this.http.get('http://lyra.b4zz-pony.de:3000/classes?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId).map(res => res.json()).catch(this.handleError).subscribe(data => {
      data.forEach(element => {
        this.classes.push(element);
      });
      console.log(this.classes);
    });
  }

  private getStudent() {
    return this.http.get('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId).map(res => res.json()).catch(this.handleError).subscribe(data => {
      data.forEach(element => {
        if (element.classId == this.classIdCreated_) {
          console.log(this.classIdCreated_);
          this.students.push(element);
        }
        else {
          let toast = this.toastCtrl.create({
            message: 'Noch keine Schüler in dieser Klasse!',
            duration: 3000
          });
          toast.present();
        }

      });
      console.log(this.students);
    });
  }

  private createClass() {
    var newClass = { "classname": this._class };
    return this.http.post('http://lyra.b4zz-pony.de:3000/classes?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId, newClass).catch(this.handleError).subscribe(res => {
      let r = res.json();
      this.classIdCreated_ = r.classId.toString();
      this.globalVariables.classForStudent = this.classIdCreated_;
      console.log(this.globalVariables.classForStudent)
      console.log(this.classIdCreated_);
      console.log(res.json());
    }), (err) => {
      console.log(err);
    };
  }

  private addStudent(myEvent) {
    //PopUp and PopOver
    let popover = this.popoverCtrl.create(AddStudent);
    popover.present({
      ev: myEvent
    });
  };

  private handleError(error: Response | any) {
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

  goToSeating() {
    this.navCtrl.push(Seating);
  }

}

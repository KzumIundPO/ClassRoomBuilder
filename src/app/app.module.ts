import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule } from '@angular/http';
import { Md5 } from 'ts-md5/dist/md5';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing-page/landing-page';
import { LandingPageMain } from '../pages/landing-page-main/landing-page-main';
import { Students } from '../pages/students/students';
import { Seating } from '../pages/seating/seating';
import { globalVariables } from '../pages/home/globalVariables';
import { Panel } from '../pages/panel/panel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    Students,
    LandingPageMain,
    Seating,
    Panel
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    Students,
    LandingPageMain,
    Seating,
    Panel
  ],
  providers: [
    StatusBar,
    SplashScreen,
    globalVariables,
    Md5,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

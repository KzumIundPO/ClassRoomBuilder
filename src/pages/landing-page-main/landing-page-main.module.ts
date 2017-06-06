import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPageMain } from './landing-page-main';

@NgModule({
  declarations: [
    LandingPageMain
  ],
  imports: [
    IonicPageModule.forChild(LandingPageMain),
  ],
  exports: [
    LandingPageMain
  ]
})
export class LandingPageMainModule {}

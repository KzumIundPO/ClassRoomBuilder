import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Panel } from './panel';

@NgModule({
  declarations: [
    Panel,
  ],
  imports: [
    IonicPageModule.forChild(Panel),
  ],
  exports: [
    Panel
  ]
})
export class SeatingModule {}

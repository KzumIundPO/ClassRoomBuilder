import { NgModule } from '@angular/core';
import { LandingPageModule } from '../pages/landing-page/landing-page.module';
import { LandingPageMainModule } from '../pages/landing-page-main/landing-page-main.module';
import { PanelModule } from '../pages/panel/panel.module';
import { SeatingModule } from '../pages/seating/seating.module';
import { StudentsModule } from '../pages/students/students.module';
import { PopoverModule } from '../components/popover/popover.module';
import { AddStudentModule } from '../components/addStudent/addStudent.module';

@NgModule({
  declarations: [
  ],
  imports: [
    LandingPageModule,
    LandingPageMainModule,
    PanelModule,
    SeatingModule,
    StudentsModule,
    PopoverModule,
    AddStudentModule
  ],
  exports: [
    LandingPageModule,
    LandingPageMainModule,
    PanelModule,
    SeatingModule,
    StudentsModule,
    PopoverModule,
    AddStudentModule
  ],
})
export class SharedModule {}

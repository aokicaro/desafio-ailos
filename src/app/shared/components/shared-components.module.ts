import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faMessage as farMessage, 
  faStar as farStar,
  faBell as farBell, 
  faCircleCheck as farCircleCheck
} from '@fortawesome/free-regular-svg-icons';
import { faBars, faMagnifyingGlass, faSliders, faBuildingColumns, faUser } from '@fortawesome/free-solid-svg-icons';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info/card-info.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    StepperComponent,
    CardInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    StepperComponent,
    CardInfoComponent
  ]
})
export class SharedComponentsModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faMagnifyingGlass,
      faBars,
      faSliders,
      faBuildingColumns,
      faUser,
      farCircleCheck,
      farStar,
      farMessage,
      farBell
    );
  }
}

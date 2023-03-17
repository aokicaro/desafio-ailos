import { RegisterAdmissionRoutingModule } from './register-admission-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperativeComponent } from './cooperative/cooperative.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CooperativeComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RegisterAdmissionRoutingModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideNgxMask()
  ]
})
export class RegisterAdmissionModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooperativeComponent } from './cooperative/cooperative.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nova-admissao-cooperado',
    pathMatch: 'full'
  },
  {
    path: 'nova-admissao-cooperado',
    data: { breadcrumb: 'Nova Admissão de cooperado' },
    component: CooperativeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAdmissionRoutingModule { }

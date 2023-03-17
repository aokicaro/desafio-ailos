import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admissao-do-cooperado',
        pathMatch: 'full'
    },
    {
        path: 'admissao-do-cooperado',
        data: { breadcrumb: 'Admissão do Cooperado' },
        loadChildren: () => import ('./register-admission/register-admission.module').then(m => m.RegisterAdmissionModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
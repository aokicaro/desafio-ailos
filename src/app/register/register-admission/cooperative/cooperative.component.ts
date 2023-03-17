import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { CpfValidator } from 'src/app/shared/helpers/cpf-validator';

@Component({
  selector: 'app-cooperative',
  templateUrl: './cooperative.component.html',
  styleUrls: ['./cooperative.component.scss']
})
export class CooperativeComponent {
  form = this.formBuilder.group({
    cpf: [
      '',[Validators.required, CpfValidator.ValidaCpf]
    ],
  });

  loading: boolean = false;
  showCard: boolean = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
  ){}

  consultCpf(): void{
   const cpfForm = this.form.getRawValue();
   // simulação de uma requisição
   this.loading = true;
   setTimeout(() => {
    this.showCard = true;
    this.loading = false;
   }, 3000);
   
  }

  isformInvalid(): boolean | undefined{
    return this.form.get('cpf')?.hasError('cpfInvalido') && this.form.get('cpf')?.touched;
  }
}

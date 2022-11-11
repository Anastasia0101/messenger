import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.servce';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  signUpForm = this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^\S*$/)
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/^\S*$/),
      Validators.minLength(5)
    ]]
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  onFormSubmit(): void {
    const formData = this.signUpForm.value;
    this.signUpForm.patchValue({email: '', password: ''});
    this.authService.signUp(formData.email!, formData.password!);
  }
}

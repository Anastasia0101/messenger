import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/sign-up/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  signInForm = this.formBuilder.group({
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
    private formBuilder: FormBuilder,
  ) { }

  onFormSubmit(): void {
    const formData = this.signInForm.value;
    this.signInForm.patchValue({email: '', password: ''});
    this.authService.signIn(formData.email!, formData.password!);
  }
}

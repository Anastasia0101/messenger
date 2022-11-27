import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/sign-up/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnDestroy {
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
  subscription$!: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  onFormSubmit(): void {
    const formData = this.signInForm.value;
    this.authService.signIn(formData.email!, formData.password!).subscribe({
      next: () => this.router.navigate(['/users']),
      error: (error) => {
        if (error.code == 'auth/user-not-found') {
          this.signInForm.controls.email.setErrors({isEmailInCorrect: true});
          return;
        }
        this.signInForm.controls.password.setErrors({isPasswordInCorrect: true});
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
}

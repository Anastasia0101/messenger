import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnDestroy {
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
  subscription$!: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  onFormSubmit(): void {
    const formData = this.signUpForm.value;
    this.subscription$ = this.authService.signUp(formData.email!, formData.password!).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}

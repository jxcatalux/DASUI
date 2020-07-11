import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  authenticationForm: FormGroup;
  hide = true;
  formSubmitted = false;
  failedAuthentication = false;

  mockedUser = {
    username: 'john.doe@ontario.ca',
    password: '123456',
    fullName: 'John Doe',
  };

  constructor(
    private spinnerService: SpinnerService,
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.authenticationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  resetForm() {
    this.formSubmitted = false;
    this.failedAuthentication = false;
    this.authenticationForm.reset();
  }

  get formControls() {
    return this.authenticationForm.controls;
  }

  isInvalidateFormControl(control: AbstractControl) {
    return this.formSubmitted && control && control.invalid;
  }

  authenticateUser() {
    const { username, password } = this.authenticationForm.value;
    this.spinnerService.show();
    setTimeout(() => {
      if (
        username.toLowerCase() === this.mockedUser.username &&
        password === this.mockedUser.password
      ) {
        this.sessionService.sessionUser = {
          fullName: this.mockedUser.fullName,
        };
        this.router.navigate([`search`]);
      } else {
        this.failedAuthentication = true;
      }
      this.spinnerService.hide();
    }, 4000);
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.authenticationForm.valid) {
      this.authenticateUser();
    }
  }
}

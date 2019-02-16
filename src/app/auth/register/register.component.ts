import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public errorMessage: string;
  public successMessage: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.errorMessage = '';
    this.successMessage = '';
  }
  ngOnInit() {
    this.createForm();
  }

  public createForm = () => {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public tryGoogleLogin = () => {
    this.authService
      .doGoogleLogin()
      .then(res => {
        this.router.navigate(['/swap-board']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public tryRegister = value => {
    this.authService
      .doRegister(value)
      .then(response => {
        console.log(response);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = error.message;
        this.successMessage = '';
      });
  }
}

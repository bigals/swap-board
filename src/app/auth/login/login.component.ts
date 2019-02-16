import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()
  userAuthed = new EventEmitter<string>();
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.errorMessage = '';
  }

  ngOnInit() {
    this.createForm();
  }

  public createForm = () => {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public tryGoogleLogin = () => {
    this.authService
      .doGoogleLogin()
      .then(res => {
        this.userAuthed.emit('user201');
        this.router.navigate(['/swap-board']);
      })
      .catch(err => {
        console.log(err);
        this.userAuthed.emit('user401');
        this.errorMessage = err.message;
      });
  }

  public tryLogin = value => {
    this.authService
      .doLogin(value)
      .then(res => {
        this.userAuthed.emit('user201');
        this.router.navigate(['/swap-board']);
      })
      .catch(err => {
        console.log(err);
        this.userAuthed.emit('user401');
        this.errorMessage = err.message;
      });
  }
}

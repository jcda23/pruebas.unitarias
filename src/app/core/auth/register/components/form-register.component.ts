import { Component, Host, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  providers: [AuthService],
})
export class FormRegisterComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({});
  isCheck: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  /*   get email() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password');
  } */

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
    });
  }

  sendRegister() {
    this.authService
      .createAccount(this.formRegister.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((err) => alert(err));
    /*   this.authService.createAccount(this.formRegister.value).subscribe(
      (response: any) => {
        this.isCheck = !!response;
        console.log(response);
      },
      (err) => {
        this.isCheck;
        console.log(err);
      }
    ); */
  }
}

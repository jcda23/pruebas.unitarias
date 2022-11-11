import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/container/login.component';
import { FormLoginComponent } from './login/components/form-login.component';
import { RegisterComponent } from './register/container/register.component';
import { FormRegisterComponent } from './register/components/form-register.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
    FormRegisterComponent,
    AuthComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
  providers: [],
})
export class AuthModule {}

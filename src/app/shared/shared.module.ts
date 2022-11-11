import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';

import {
  FooterComponent,
  HeaderPrivateComponent,
  HeaderPublicComponent,
} from './index';
import { environment } from 'src/environments/environment';
import { AuthService } from '../core/services/auth/auth.service';

@NgModule({
  declarations: [
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  exports: [
    HttpClientModule,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
  ],
  providers: [AuthService],
})
export class SharedModule {}

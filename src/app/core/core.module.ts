import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';

import { MainNotfoundComponent } from './not-found/components/main-notfound.component';
import { NotfoundComponent } from './not-found/container/notfound.component';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [NotfoundComponent, MainNotfoundComponent],
  imports: [CommonModule, RouterModule, SharedModule, AuthModule],
  exports: [],
  providers: [],
})
export class CoreModule {}

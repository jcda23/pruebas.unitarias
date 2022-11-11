import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { PrivateHomeComponent } from './home/container/private-home.component';
import { BrowseComponent } from './home/components/browse/browse.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PrivateComponent, BrowseComponent, PrivateHomeComponent],
  imports: [CommonModule, SharedModule, PrivateRoutingModule],
})
export class PrivateModule {}

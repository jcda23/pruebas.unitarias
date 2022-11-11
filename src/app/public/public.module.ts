import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/index';
import { HomeComponent } from './home/container/home.component';
import { PublicComponent } from './public.component';
import { HeroImageComponent } from './home/components/hero-image/hero-image.component';
import { StoryCardComponent } from './home/components/story-card/story-card.component';

@NgModule({
  declarations: [PublicComponent, HeroImageComponent, HomeComponent, StoryCardComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}

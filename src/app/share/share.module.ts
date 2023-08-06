import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from './carousel/carousel.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    CarouselComponent,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    CarouselModule,
    TagModule,
    ButtonModule,
  ]
})
export class ShareModule { }

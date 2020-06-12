import { ChapterFiveComponent } from './chapter-five.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFiveRoutingModule } from './chapter-five-routing.module';
import { FontFamiliesComponent } from './sections/font-families/font-families.component';
import { FontWeightsComponent } from './sections/font-weights/font-weights.component';




@NgModule({
  declarations: [
    ChapterFiveComponent,
    FontFamiliesComponent,
    FontWeightsComponent,
  ],
  imports: [
    CommonModule,
    ChapterFiveRoutingModule
  ]
})
export class ChapterFiveModule { }

import { ChapterFiveComponent } from './chapter-five.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFiveRoutingModule } from './chapter-five-routing.module';
import { FontFamiliesComponent } from './sections/font-families/font-families.component';




@NgModule({
  declarations: [
    ChapterFiveComponent,
    FontFamiliesComponent,
  ],
  imports: [
    CommonModule,
    ChapterFiveRoutingModule
  ]
})
export class ChapterFiveModule { }

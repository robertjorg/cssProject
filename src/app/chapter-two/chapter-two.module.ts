import { ChapterTwoRoutingModule } from './chapter-two-routing.module';
import { ChapterTwoComponent } from './chapter-two.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ChapterTwoComponent
  ],
  imports: [
    CommonModule,
    ChapterTwoRoutingModule
  ]
})
export class ChapterTwoModule { }

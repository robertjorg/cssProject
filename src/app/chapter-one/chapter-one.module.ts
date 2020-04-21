import { ChapterOneRoutingModule } from './chapter-one-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterOneComponent } from './chapter-one.component';



@NgModule({
  declarations: [ChapterOneComponent],
  imports: [
    CommonModule,
    ChapterOneRoutingModule
  ]
})
export class ChapterOneModule { }

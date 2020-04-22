import { SpecificityComponent } from './sections/specificity/specificity.component';
import { ChapterThreeComponent } from './chapter-three.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterThreeRoutingModule } from './chapter-three-routing.module';



@NgModule({
  declarations: [
    ChapterThreeComponent,
    SpecificityComponent
  ],
  imports: [
    CommonModule,
    ChapterThreeRoutingModule
  ]
})
export class ChapterThreeModule { }

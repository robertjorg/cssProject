import { ChapterFourComponent } from './chapter-four.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFourRoutingModule } from './chapter-four-routing.module';
import { ValuesAndUnitsComponent } from './sections/values-and-units/values-and-units.component';
import { KeywordStringsOtherTextComponent } from './sections/keyword-strings-other-text/keyword-strings-other-text.component';



@NgModule({
  declarations: [
    ChapterFourComponent,
    ValuesAndUnitsComponent,
    KeywordStringsOtherTextComponent
  ],
  imports: [
    CommonModule,
    ChapterFourRoutingModule
  ]
})
export class ChapterFourModule { }

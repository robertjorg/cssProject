import { ChapterFourComponent } from './chapter-four.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFourRoutingModule } from './chapter-four-routing.module';
import { ValuesAndUnitsComponent } from './sections/values-and-units/values-and-units.component';



@NgModule({
  declarations: [
    ChapterFourComponent,
    ValuesAndUnitsComponent
  ],
  imports: [
    CommonModule,
    ChapterFourRoutingModule
  ]
})
export class ChapterFourModule { }

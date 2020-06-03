import { ChapterFourComponent } from './chapter-four.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFourRoutingModule } from './chapter-four-routing.module';
import { ValuesAndUnitsComponent } from './sections/values-and-units/values-and-units.component';
import { KeywordStringsOtherTextComponent } from './sections/keyword-strings-other-text/keyword-strings-other-text.component';
import { NumbersPercentagesComponent } from './sections/numbers-percentages/numbers-percentages.component';
import { DistancesComponent } from './sections/distances/distances.component';
import { CalculationValuesComponent } from './sections/calculation-values/calculation-values.component';
import { AttributeValuesComponent } from './sections/attribute-values/attribute-values.component';
import { ColorComponent } from './sections/color/color.component';
import { AnglesComponent } from './sections/angles/angles.component';



@NgModule({
  declarations: [
    ChapterFourComponent,
    ValuesAndUnitsComponent,
    KeywordStringsOtherTextComponent,
    NumbersPercentagesComponent,
    DistancesComponent,
    CalculationValuesComponent,
    AttributeValuesComponent,
    ColorComponent,
    AnglesComponent
  ],
  imports: [
    CommonModule,
    ChapterFourRoutingModule
  ]
})
export class ChapterFourModule { }

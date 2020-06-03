import { AnglesComponent } from './sections/angles/angles.component';
import { ColorComponent } from './sections/color/color.component';
import { AttributeValuesComponent } from './sections/attribute-values/attribute-values.component';
import { CalculationValuesComponent } from './sections/calculation-values/calculation-values.component';
import { DistancesComponent } from './sections/distances/distances.component';
import { NumbersPercentagesComponent } from './sections/numbers-percentages/numbers-percentages.component';
import { KeywordStringsOtherTextComponent } from './sections/keyword-strings-other-text/keyword-strings-other-text.component';
import { ValuesAndUnitsComponent } from './sections/values-and-units/values-and-units.component';
import { Routes, RouterModule } from '@angular/router';
import { ChapterFourComponent } from './chapter-four.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: ChapterFourComponent,
    children: [
      { path: '', redirectTo: 'valuesAndUnits', pathMatch: 'full' },
      { path: 'valuesAndUnits', component: ValuesAndUnitsComponent },
      { path: 'keywords', component: KeywordStringsOtherTextComponent },
      { path: 'numbers', component: NumbersPercentagesComponent },
      { path: 'distances', component: DistancesComponent },
      { path: 'calculation', component: CalculationValuesComponent },
      { path: 'attribute', component: AttributeValuesComponent },
      { path: 'color', component: ColorComponent },
      { path: 'angles', component: AnglesComponent },
    ] }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterFourRoutingModule {}

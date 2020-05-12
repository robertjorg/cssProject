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
    ] }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterFourRoutingModule {}

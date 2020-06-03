import { FontFamiliesComponent } from './sections/font-families/font-families.component';
import { ChapterFiveComponent } from './chapter-five.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: ChapterFiveComponent,
    children: [
      { path: '', redirectTo: 'families', pathMatch: 'full' },
      { path: 'families', component: FontFamiliesComponent },
    ] }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterFiveRoutingModule {}

import { DeclarationsAndSpecificityComponent } from './sections/declarations-and-specificity/declarations-and-specificity.component';
import { SpecificityComponent } from './sections/specificity/specificity.component';
import { ChapterThreeComponent } from './chapter-three.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: ChapterThreeComponent,
    children: [
      { path: '', redirectTo: 'specificity', pathMatch: 'full' },
      { path: 'specificity', component: SpecificityComponent },
      { path: 'dands', component: DeclarationsAndSpecificityComponent}

    ] }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterThreeRoutingModule {}

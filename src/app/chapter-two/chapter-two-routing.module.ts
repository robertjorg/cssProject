import { ChapterTwoComponent } from './chapter-two.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: ChapterTwoComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterTwoRoutingModule {}

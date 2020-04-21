import { ChapterOneComponent } from './chapter-one.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: ChapterOneComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterOneRoutingModule {}

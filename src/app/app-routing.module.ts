import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
      children: [
        { path: '', component: HomeComponent},
        { path: 'chapterOne', loadChildren: './chapter-one/chapter-one.module#ChapterOneModule'},
        { path: 'chapterTwo', loadChildren: './chapter-two/chapter-two.module#ChapterTwoModule'},
        { path: 'chapterThree', loadChildren: './chapter-three/chapter-three.module#ChapterThreeModule'},
        { path: 'chapterFour', loadChildren: './chapter-four/chapter-four.module#ChapterFourModule'},
        { path: 'fonts', loadChildren: './chapter-five/chapter-five.module#ChapterFiveModule'},
      ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

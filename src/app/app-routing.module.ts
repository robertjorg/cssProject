import { ExactSelectorsComponent } from './AttributeSelectors/exact-selectors/exact-selectors.component';
import { SimpleSelectorsComponent } from './AttributeSelectors/simple-selectors/simple-selectors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
      children: [
        { path: 'simple', component: SimpleSelectorsComponent},
        { path: 'exact', component: ExactSelectorsComponent}
      ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { PseudoElementSelectorsComponent } from '../chapter-two/sections/pseudo-element-selectors/pseudo-element-selectors.component';
import { UiStatePseudoComponent } from '../chapter-two/sections/ui-state-pseudo/ui-state-pseudo.component';
import { DynamicPseudoClassSelectorsComponent } from '../chapter-two/sections/dynamic-pseudo-class-selectors/dynamic-pseudo-class-selectors.component';
import { PseudoClassSelectorsComponent } from '../chapter-two/sections/pseudo-class-selectors/pseudo-class-selectors.component';
import { PartialAttributesComponent } from '../chapter-two/sections/partial-attributes/partial-attributes.component';
import { ExactSelectorsComponent } from '../chapter-two/sections/exact-selectors/exact-selectors.component';
import { SimpleSelectorsComponent } from '../chapter-two/sections/simple-selectors/simple-selectors.component';
import { DocumentStructureComponent } from '../chapter-two/sections/document-structure/document-structure.component';
import { ChapterTwoComponent } from './chapter-two.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: ChapterTwoComponent,
    children: [
      { path: '', redirectTo: 'document', pathMatch: 'full' },
      { path: 'document', component: DocumentStructureComponent},
      { path: 'simple', component: SimpleSelectorsComponent},
      { path: 'exact', component: ExactSelectorsComponent},
      { path: 'partial', component: PartialAttributesComponent},
      { path: 'pseudo', component: PseudoClassSelectorsComponent},
      { path: 'dynamic', component: DynamicPseudoClassSelectorsComponent},
      { path: 'uistate', component: UiStatePseudoComponent},
      { path: 'pseudoelement', component: PseudoElementSelectorsComponent},

    ] }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterTwoRoutingModule {}

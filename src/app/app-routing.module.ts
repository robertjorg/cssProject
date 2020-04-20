import { HomeComponent } from './home/home.component';
import { PseudoElementSelectorsComponent } from './AttributeSelectors/pseudo-element-selectors/pseudo-element-selectors.component';
import { UiStatePseudoComponent } from './AttributeSelectors/ui-state-pseudo/ui-state-pseudo.component';
// tslint:disable-next-line:max-line-length
import { DynamicPseudoClassSelectorsComponent } from './AttributeSelectors/dynamic-pseudo-class-selectors/dynamic-pseudo-class-selectors.component';
import { PseudoClassSelectorsComponent } from './AttributeSelectors/pseudo-class-selectors/pseudo-class-selectors.component';
import { DocumentStructureComponent } from './AttributeSelectors/document-structure/document-structure.component';
import { PartialAttributesComponent } from './AttributeSelectors/partial-attributes/partial-attributes.component';
import { ExactSelectorsComponent } from './AttributeSelectors/exact-selectors/exact-selectors.component';
import { SimpleSelectorsComponent } from './AttributeSelectors/simple-selectors/simple-selectors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
      children: [
        { path: '', component: HomeComponent},
        { path: 'simple', component: SimpleSelectorsComponent},
        { path: 'exact', component: ExactSelectorsComponent},
        { path: 'partial', component: PartialAttributesComponent},
        { path: 'document', component: DocumentStructureComponent},
        { path: 'pseudo', component: PseudoClassSelectorsComponent},
        { path: 'dynamic', component: DynamicPseudoClassSelectorsComponent},
        { path: 'uistate', component: UiStatePseudoComponent},
        { path: 'pseudoelement', component: PseudoElementSelectorsComponent},
        { path: 'chapterTwo', loadChildren: './chapter-two/chapter-two.module#ChapterTwoModule'}
      ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
        { path: 'simple', component: SimpleSelectorsComponent},
        { path: 'exact', component: ExactSelectorsComponent},
        { path: 'partial', component: PartialAttributesComponent},
        { path: 'document', component: DocumentStructureComponent},
        { path: 'pseudo', component: PseudoClassSelectorsComponent},
      ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

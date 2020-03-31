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
      ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

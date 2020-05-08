import { CascadeComponent } from './sections/cascade/cascade.component';
import { InheritanceComponent } from './sections/inheritance/inheritance.component';
import { ImportanceComponent } from './sections/importance/importance.component';
import { InlineStyleSpecificityComponent } from './sections/inline-style-specificity/inline-style-specificity.component';
import { IdAttributeSelectorComponent } from './sections/id-attribute-selector/id-attribute-selector.component';
import { UniversalSelectorSpecificityComponent } from './sections/universal-selector-specificity/universal-selector-specificity.component';
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
      { path: 'specificity/dands', component: DeclarationsAndSpecificityComponent },
      { path: 'specificity/universal', component: UniversalSelectorSpecificityComponent },
      { path: 'specificity/idattribute', component: IdAttributeSelectorComponent },
      { path: 'specificity/inline', component: InlineStyleSpecificityComponent },
      { path: 'specificity/importance', component: ImportanceComponent },
      { path: 'inheritance', component: InheritanceComponent },
      { path: 'cascade', component: CascadeComponent }

    ] }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChapterThreeRoutingModule {}

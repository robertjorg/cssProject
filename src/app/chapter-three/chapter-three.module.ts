import { SpecificityComponent } from './sections/specificity/specificity.component';
import { ChapterThreeComponent } from './chapter-three.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterThreeRoutingModule } from './chapter-three-routing.module';
import { DeclarationsAndSpecificityComponent } from './sections/declarations-and-specificity/declarations-and-specificity.component';
import { UniversalSelectorSpecificityComponent } from './sections/universal-selector-specificity/universal-selector-specificity.component';
import { IdAttributeSelectorComponent } from './sections/id-attribute-selector/id-attribute-selector.component';
import { InlineStyleSpecificityComponent } from './sections/inline-style-specificity/inline-style-specificity.component';
import { ImportanceComponent } from './sections/importance/importance.component';
import { InheritanceComponent } from './sections/inheritance/inheritance.component';
import { CascadeComponent } from './sections/cascade/cascade.component';
import { WeithAndOriginComponent } from './sections/cascade/sub-sections/weith-and-origin/weith-and-origin.component';
import { SortBySpecificityComponent } from './sections/cascade/sub-sections/sort-by-specificity/sort-by-specificity.component';



@NgModule({
  declarations: [
    ChapterThreeComponent,
    SpecificityComponent,
    DeclarationsAndSpecificityComponent,
    UniversalSelectorSpecificityComponent,
    IdAttributeSelectorComponent,
    InlineStyleSpecificityComponent,
    ImportanceComponent,
    InheritanceComponent,
    CascadeComponent,
    WeithAndOriginComponent,
    SortBySpecificityComponent
  ],
  imports: [
    CommonModule,
    ChapterThreeRoutingModule
  ]
})
export class ChapterThreeModule { }

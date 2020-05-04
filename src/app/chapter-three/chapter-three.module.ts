import { SpecificityComponent } from './sections/specificity/specificity.component';
import { ChapterThreeComponent } from './chapter-three.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterThreeRoutingModule } from './chapter-three-routing.module';
import { DeclarationsAndSpecificityComponent } from './sections/declarations-and-specificity/declarations-and-specificity.component';
import { UniversalSelectorSpecificityComponent } from './sections/universal-selector-specificity/universal-selector-specificity.component';
import { IdAttributeSelectorComponent } from './sections/id-attribute-selector/id-attribute-selector.component';



@NgModule({
  declarations: [
    ChapterThreeComponent,
    SpecificityComponent,
    DeclarationsAndSpecificityComponent,
    UniversalSelectorSpecificityComponent,
    IdAttributeSelectorComponent
  ],
  imports: [
    CommonModule,
    ChapterThreeRoutingModule
  ]
})
export class ChapterThreeModule { }

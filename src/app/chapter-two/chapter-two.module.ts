import { SimpleSelectorsComponent } from '../chapter-two/sections/simple-selectors/simple-selectors.component';
import { ExactSelectorsComponent } from '../chapter-two/sections/exact-selectors/exact-selectors.component';
import { PartialAttributesComponent } from '../chapter-two/sections/partial-attributes/partial-attributes.component';
import { PseudoClassSelectorsComponent } from '../chapter-two/sections/pseudo-class-selectors/pseudo-class-selectors.component';
import { DynamicPseudoClassSelectorsComponent } from '../chapter-two/sections/dynamic-pseudo-class-selectors/dynamic-pseudo-class-selectors.component';
import { UiStatePseudoComponent } from '../chapter-two/sections/ui-state-pseudo/ui-state-pseudo.component';
import { PseudoElementSelectorsComponent } from '../chapter-two/sections/pseudo-element-selectors/pseudo-element-selectors.component';
import { DocumentStructureComponent } from '../chapter-two/sections/document-structure/document-structure.component';
import { ChapterTwoRoutingModule } from './chapter-two-routing.module';
import { ChapterTwoComponent } from './chapter-two.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ChapterTwoComponent,
    DocumentStructureComponent,
    SimpleSelectorsComponent,
    ExactSelectorsComponent,
    PartialAttributesComponent,
    PseudoClassSelectorsComponent,
    DynamicPseudoClassSelectorsComponent,
    UiStatePseudoComponent,
    PseudoElementSelectorsComponent
  ],
  imports: [
    CommonModule,
    ChapterTwoRoutingModule
  ]
})
export class ChapterTwoModule { }

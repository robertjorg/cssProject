import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSelectorsComponent } from './AttributeSelectors/simple-selectors/simple-selectors.component';
import { ExactSelectorsComponent } from './AttributeSelectors/exact-selectors/exact-selectors.component';
import { PartialAttributesComponent } from './AttributeSelectors/partial-attributes/partial-attributes.component';
import { DocumentStructureComponent } from './AttributeSelectors/document-structure/document-structure.component';
import { PseudoClassSelectorsComponent } from './AttributeSelectors/pseudo-class-selectors/pseudo-class-selectors.component';
import { DynamicPseudoClassSelectorsComponent } from './AttributeSelectors/dynamic-pseudo-class-selectors/dynamic-pseudo-class-selectors.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSelectorsComponent,
    ExactSelectorsComponent,
    PartialAttributesComponent,
    DocumentStructureComponent,
    PseudoClassSelectorsComponent,
    DynamicPseudoClassSelectorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentStructureComponent } from './document-structure.component';

describe('DocumentStructureComponent', () => {
  let component: DocumentStructureComponent;
  let fixture: ComponentFixture<DocumentStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

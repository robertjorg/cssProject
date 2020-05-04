import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdAttributeSelectorComponent } from './id-attribute-selector.component';

describe('IdAttributeSelectorComponent', () => {
  let component: IdAttributeSelectorComponent;
  let fixture: ComponentFixture<IdAttributeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdAttributeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdAttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

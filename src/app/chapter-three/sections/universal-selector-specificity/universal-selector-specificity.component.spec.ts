import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalSelectorSpecificityComponent } from './universal-selector-specificity.component';

describe('UniversalSelectorSpecificityComponent', () => {
  let component: UniversalSelectorSpecificityComponent;
  let fixture: ComponentFixture<UniversalSelectorSpecificityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalSelectorSpecificityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalSelectorSpecificityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

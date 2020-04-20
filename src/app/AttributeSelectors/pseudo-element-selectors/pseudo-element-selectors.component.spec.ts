import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoElementSelectorsComponent } from './pseudo-element-selectors.component';

describe('PseudoElementSelectorsComponent', () => {
  let component: PseudoElementSelectorsComponent;
  let fixture: ComponentFixture<PseudoElementSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoElementSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoElementSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

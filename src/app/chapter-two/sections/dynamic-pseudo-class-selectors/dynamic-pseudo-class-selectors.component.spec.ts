import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPseudoClassSelectorsComponent } from './dynamic-pseudo-class-selectors.component';

describe('DynamicPseudoClassSelectorsComponent', () => {
  let component: DynamicPseudoClassSelectorsComponent;
  let fixture: ComponentFixture<DynamicPseudoClassSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPseudoClassSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPseudoClassSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

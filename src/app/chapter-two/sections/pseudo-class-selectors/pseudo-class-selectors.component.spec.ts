import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoClassSelectorsComponent } from './pseudo-class-selectors.component';

describe('PseudoClassSelectorsComponent', () => {
  let component: PseudoClassSelectorsComponent;
  let fixture: ComponentFixture<PseudoClassSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoClassSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoClassSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

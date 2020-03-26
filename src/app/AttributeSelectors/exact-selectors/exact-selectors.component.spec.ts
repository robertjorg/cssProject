import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactSelectorsComponent } from './exact-selectors.component';

describe('ExactSelectorsComponent', () => {
  let component: ExactSelectorsComponent;
  let fixture: ComponentFixture<ExactSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExactSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExactSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

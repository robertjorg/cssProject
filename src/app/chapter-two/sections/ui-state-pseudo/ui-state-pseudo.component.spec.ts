import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStatePseudoComponent } from './ui-state-pseudo.component';

describe('UiStatePseudoComponent', () => {
  let component: UiStatePseudoComponent;
  let fixture: ComponentFixture<UiStatePseudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiStatePseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiStatePseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

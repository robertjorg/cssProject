import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontWeightsComponent } from './font-weights.component';

describe('FontWeightsComponent', () => {
  let component: FontWeightsComponent;
  let fixture: ComponentFixture<FontWeightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontWeightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

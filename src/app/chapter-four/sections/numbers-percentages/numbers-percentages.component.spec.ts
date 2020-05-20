import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersPercentagesComponent } from './numbers-percentages.component';

describe('NumbersPercentagesComponent', () => {
  let component: NumbersPercentagesComponent;
  let fixture: ComponentFixture<NumbersPercentagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersPercentagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersPercentagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

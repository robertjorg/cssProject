import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationValuesComponent } from './calculation-values.component';

describe('CalculationValuesComponent', () => {
  let component: CalculationValuesComponent;
  let fixture: ComponentFixture<CalculationValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

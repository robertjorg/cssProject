import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesAndUnitsComponent } from './values-and-units.component';

describe('ValuesAndUnitsComponent', () => {
  let component: ValuesAndUnitsComponent;
  let fixture: ComponentFixture<ValuesAndUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesAndUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesAndUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

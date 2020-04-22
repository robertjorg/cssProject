import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificityComponent } from './specificity.component';

describe('SpecificityComponent', () => {
  let component: SpecificityComponent;
  let fixture: ComponentFixture<SpecificityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialAttributesComponent } from './partial-attributes.component';

describe('PartialAttributesComponent', () => {
  let component: PartialAttributesComponent;
  let fixture: ComponentFixture<PartialAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

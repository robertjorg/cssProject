import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationsAndSpecificityComponent } from './declarations-and-specificity.component';

describe('DeclarationsAndSpecificityComponent', () => {
  let component: DeclarationsAndSpecificityComponent;
  let fixture: ComponentFixture<DeclarationsAndSpecificityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationsAndSpecificityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationsAndSpecificityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

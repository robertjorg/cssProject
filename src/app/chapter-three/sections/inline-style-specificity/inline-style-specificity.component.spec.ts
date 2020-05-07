import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleSpecificityComponent } from './inline-style-specificity.component';

describe('InlineStyleSpecificityComponent', () => {
  let component: InlineStyleSpecificityComponent;
  let fixture: ComponentFixture<InlineStyleSpecificityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineStyleSpecificityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStyleSpecificityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

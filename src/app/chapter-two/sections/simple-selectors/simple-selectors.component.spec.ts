import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSelectorsComponent } from './simple-selectors.component';

describe('SimpleSelectorsComponent', () => {
  let component: SimpleSelectorsComponent;
  let fixture: ComponentFixture<SimpleSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

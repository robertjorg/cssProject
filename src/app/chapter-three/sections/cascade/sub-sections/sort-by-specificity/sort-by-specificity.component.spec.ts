import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBySpecificityComponent } from './sort-by-specificity.component';

describe('SortBySpecificityComponent', () => {
  let component: SortBySpecificityComponent;
  let fixture: ComponentFixture<SortBySpecificityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortBySpecificityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortBySpecificityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontFamiliesComponent } from './font-families.component';

describe('FontFamiliesComponent', () => {
  let component: FontFamiliesComponent;
  let fixture: ComponentFixture<FontFamiliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontFamiliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

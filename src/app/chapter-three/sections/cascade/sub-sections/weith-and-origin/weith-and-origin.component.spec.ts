import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeithAndOriginComponent } from './weith-and-origin.component';

describe('WeithAndOriginComponent', () => {
  let component: WeithAndOriginComponent;
  let fixture: ComponentFixture<WeithAndOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeithAndOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeithAndOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

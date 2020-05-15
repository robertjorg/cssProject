import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordStringsOtherTextComponent } from './keyword-strings-other-text.component';

describe('KeywordStringsOtherTextComponent', () => {
  let component: KeywordStringsOtherTextComponent;
  let fixture: ComponentFixture<KeywordStringsOtherTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordStringsOtherTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordStringsOtherTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

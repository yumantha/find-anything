import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterPassDialog} from './enter-pass.component';

describe('EnterPassDialog', () => {
  let component: EnterPassDialog;
  let fixture: ComponentFixture<EnterPassDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterPassDialog]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPassDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

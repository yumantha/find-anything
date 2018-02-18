import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmServicedeleteDialog } from './confirm-servicedelete.component';

describe('ConfirmServicedeleteDialog', () => {
  let component: ConfirmServicedeleteDialog;
  let fixture: ComponentFixture<ConfirmServicedeleteDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmServicedeleteDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmServicedeleteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

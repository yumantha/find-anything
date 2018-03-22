import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteAccountDialog } from './confirm-delete-account.component';

describe('ConfirmDeleteAccountDialog', () => {
  let component: ConfirmDeleteAccountDialog;
  let fixture: ComponentFixture<ConfirmDeleteAccountDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteAccountDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteAccountDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

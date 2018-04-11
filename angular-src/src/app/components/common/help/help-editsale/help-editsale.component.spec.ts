import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpEditsaleComponent } from './help-editsale.component';

describe('HelpEditsaleComponent', () => {
  let component: HelpEditsaleComponent;
  let fixture: ComponentFixture<HelpEditsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpEditsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpEditsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

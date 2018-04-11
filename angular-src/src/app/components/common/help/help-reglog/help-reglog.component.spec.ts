import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpReglogComponent } from './help-reglog.component';

describe('HelpReglogComponent', () => {
  let component: HelpReglogComponent;
  let fixture: ComponentFixture<HelpReglogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpReglogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpReglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

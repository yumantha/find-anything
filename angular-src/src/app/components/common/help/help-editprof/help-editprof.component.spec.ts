import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpEditprofComponent } from './help-editprof.component';

describe('HelpEditprofComponent', () => {
  let component: HelpEditprofComponent;
  let fixture: ComponentFixture<HelpEditprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpEditprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpEditprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

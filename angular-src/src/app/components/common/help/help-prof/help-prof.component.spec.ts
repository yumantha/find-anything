import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelpProfComponent} from './help-prof.component';

describe('HelpProfComponent', () => {
  let component: HelpProfComponent;
  let fixture: ComponentFixture<HelpProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpProfComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelpAddsaleComponent} from './help-addsale.component';

describe('HelpAddsaleComponent', () => {
  let component: HelpAddsaleComponent;
  let fixture: ComponentFixture<HelpAddsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpAddsaleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAddsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelpFavreqsaleComponent} from './help-favreqsale.component';

describe('HelpFavreqsaleComponent', () => {
  let component: HelpFavreqsaleComponent;
  let fixture: ComponentFixture<HelpFavreqsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpFavreqsaleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpFavreqsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

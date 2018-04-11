import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpReviewsaleComponent } from './help-reviewsale.component';

describe('HelpReviewsaleComponent', () => {
  let component: HelpReviewsaleComponent;
  let fixture: ComponentFixture<HelpReviewsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpReviewsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpReviewsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

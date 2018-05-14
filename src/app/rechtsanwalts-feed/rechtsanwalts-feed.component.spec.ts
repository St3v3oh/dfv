import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechtsanwaltsFeedComponent } from './rechtsanwalts-feed.component';

describe('RechtsanwaltsFeedComponent', () => {
  let component: RechtsanwaltsFeedComponent;
  let fixture: ComponentFixture<RechtsanwaltsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechtsanwaltsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechtsanwaltsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

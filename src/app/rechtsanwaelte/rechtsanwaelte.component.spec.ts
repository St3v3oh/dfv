import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechtsanwaelteComponent } from './rechtsanwaelte.component';

describe('RechtsanwaelteComponent', () => {
  let component: RechtsanwaelteComponent;
  let fixture: ComponentFixture<RechtsanwaelteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechtsanwaelteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechtsanwaelteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

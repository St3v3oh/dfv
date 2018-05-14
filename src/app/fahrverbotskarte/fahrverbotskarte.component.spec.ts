import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrverbotskarteComponent } from './fahrverbotskarte.component';

describe('FahrverbotskarteComponent', () => {
  let component: FahrverbotskarteComponent;
  let fixture: ComponentFixture<FahrverbotskarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrverbotskarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrverbotskarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

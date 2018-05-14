import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerkaufsportalComponent } from './verkaufsportal.component';

describe('VerkaufsportalComponent', () => {
  let component: VerkaufsportalComponent;
  let fixture: ComponentFixture<VerkaufsportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerkaufsportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerkaufsportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

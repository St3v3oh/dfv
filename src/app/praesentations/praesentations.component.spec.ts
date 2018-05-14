import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraesentationsComponent } from './praesentations.component';

describe('PraesentationsComponent', () => {
  let component: PraesentationsComponent;
  let fixture: ComponentFixture<PraesentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraesentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraesentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

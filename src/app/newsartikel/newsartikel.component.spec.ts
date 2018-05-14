import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsartikelComponent } from './newsartikel.component';

describe('NewsartikelComponent', () => {
  let component: NewsartikelComponent;
  let fixture: ComponentFixture<NewsartikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsartikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsartikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

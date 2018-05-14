import { TestBed, inject } from '@angular/core/testing';

import { AnwaelteService } from './anwaelte.service';

describe('AnwaelteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnwaelteService]
    });
  });

  it('should be created', inject([AnwaelteService], (service: AnwaelteService) => {
    expect(service).toBeTruthy();
  }));
});

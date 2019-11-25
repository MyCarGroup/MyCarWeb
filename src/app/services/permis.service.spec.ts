import { TestBed } from '@angular/core/testing';

import { PermisService } from './permis.service';

describe('PermisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermisService = TestBed.get(PermisService);
    expect(service).toBeTruthy();
  });
});

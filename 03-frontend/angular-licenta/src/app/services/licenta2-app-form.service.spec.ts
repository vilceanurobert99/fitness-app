import { TestBed } from '@angular/core/testing';

import { Licenta2AppFormService } from './licenta2-app-form.service';

describe('Licenta2AppFormService', () => {
  let service: Licenta2AppFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Licenta2AppFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TestMakerService } from './test-maker.service';

describe('TestMakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestMakerService = TestBed.get(TestMakerService);
    expect(service).toBeTruthy();
  });
});

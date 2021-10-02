import { TestBed } from '@angular/core/testing';

import { MedReviewService } from './med-review.service';

describe('MedReviewService', () => {
  let service: MedReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

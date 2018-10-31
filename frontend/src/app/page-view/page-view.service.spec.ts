import { TestBed, inject } from '@angular/core/testing';

import { PageViewService } from './page-view.service';

describe('PageViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageViewService]
    });
  });

  it('should be created', inject([PageViewService], (service: PageViewService) => {
    expect(service).toBeTruthy();
  }));
});

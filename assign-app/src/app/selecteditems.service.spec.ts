import { TestBed } from '@angular/core/testing';

import { SelecteditemsService } from './selecteditems.service';

describe('SelecteditemsService', () => {
  let service: SelecteditemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelecteditemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

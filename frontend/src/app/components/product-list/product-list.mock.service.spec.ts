import { TestBed } from '@angular/core/testing';

import { ProductsMockService } from './products.mock.service';

describe('ItemsMockService', () => {
  let service: ProductsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

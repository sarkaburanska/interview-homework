import {TestBed} from '@angular/core/testing';

import {ProductsService} from './products.service';
import {ApiService} from "./api.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, ApiService, ProductsService, HttpHandler]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

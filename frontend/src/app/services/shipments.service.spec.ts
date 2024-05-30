import {TestBed} from '@angular/core/testing';

import {ShipmentsService} from './shipments.service';
import {ApiService} from "./api.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ShipmentsService', () => {
  let service: ShipmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, ApiService, ShipmentsService, HttpHandler]
    });
    service = TestBed.inject(ShipmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

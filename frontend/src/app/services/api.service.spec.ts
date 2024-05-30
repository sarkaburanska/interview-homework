import {TestBed} from '@angular/core/testing';
import {ApiService} from "./api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


describe('ApiServiceService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

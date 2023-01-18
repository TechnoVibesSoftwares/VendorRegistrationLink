// import { VendorRegistrationService } from 'src/app/services/vendor.service';
import { TestBed } from '@angular/core/testing';
 import { VendorRegistrationService } from './vendor.service';
 

describe('VendorService', () => {
  let service: VendorRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

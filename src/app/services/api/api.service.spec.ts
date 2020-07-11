import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpinnerService } from '../spinner/spinner.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { ConfigService } from '../config/config.service';

describe('ApiService', () => {
  let service: ApiService;

  const mockConfigService = jasmine.createSpyObj('ConfigService', [
    'getConfig',
  ]);

  mockConfigService.getConfig.and.returnValue({
    serviceBaseUrl: 'http://localhost:8080/api',
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, OverlayModule],
      providers: [
        SpinnerService,
        { provide: ConfigService, useValue: mockConfigService },
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

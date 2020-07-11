import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CustomTranslationHttpLoaderService } from './custom-translation-http-loader.service';

describe('CustomTranslationHttpLoaderService', () => {
  let service: CustomTranslationHttpLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomTranslationHttpLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FetchApiInterceptor } from './fetch-api.interceptor';

describe('FetchApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FetchApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FetchApiInterceptor = TestBed.inject(FetchApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { XmlHttpService } from './xml-http.service';

describe('XmlHttpService', () => {
  let service: XmlHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

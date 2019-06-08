import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ClientService = TestBed.get(ClientService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UserLoginService } from './user-sign-in.service';

describe('UserLoginService', () => {
  let service: UserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

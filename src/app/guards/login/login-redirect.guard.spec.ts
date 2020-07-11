import { TestBed } from '@angular/core/testing';

import { LoginRedirectGuard } from './login-redirect.guard';
import { SessionService } from 'src/app/services/session/session.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginRedirectGuard', () => {
  let guard: LoginRedirectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SessionService],
    });
    guard = TestBed.inject(LoginRedirectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from '../spinner/spinner.service';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { noCacheHttpOptions } from '../config/http-options';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected serviceBaseUrl = `${this.configService.getConfig().serviceBaseUrl}`;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private spinnerService: SpinnerService,
  ) {}

  get(
    url: string,
    options?: object,
    spinnerOrigin?: CdkOverlayOrigin,
  ): Observable<any> {
    this.spinnerService.show(spinnerOrigin);
    return new Observable(observer => {
      this.http
        .get(this.serviceBaseUrl + url, options || noCacheHttpOptions)
        .pipe(take(1))
        .subscribe(
          response =>
            this.hideSpinnerAndPass(response, observer, spinnerOrigin),
          error => this.hideSpinnerAndPassError(error, observer, spinnerOrigin),
        );
    });
  }

  post(
    url: string,
    request: object,
    options?: object,
    spinnerOrigin?: CdkOverlayOrigin,
  ): Observable<any> {
    this.spinnerService.show(spinnerOrigin);
    return new Observable(observer => {
      this.http
        .post(this.serviceBaseUrl + url, request, options || noCacheHttpOptions)
        .pipe(take(1))
        .subscribe(
          response =>
            this.hideSpinnerAndPass(response, observer, spinnerOrigin),
          error => this.hideSpinnerAndPassError(error, observer, spinnerOrigin),
        );
    });
  }

  private hideSpinnerAndPass(
    response,
    observer,
    spinnerOrigin: CdkOverlayOrigin,
  ) {
    this.spinnerService.hide(spinnerOrigin);
    observer.next(response);
  }

  private hideSpinnerAndPassError(
    error,
    observer,
    spinnerOrigin: CdkOverlayOrigin,
  ) {
    this.spinnerService.hide(spinnerOrigin);
    observer.error(error);
  }
}

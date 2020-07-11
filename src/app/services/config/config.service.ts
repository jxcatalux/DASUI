import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { noCacheHttpOptions } from './http-options';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private envConfig;

  constructor(private injector: Injector) {}

  public loadAppConfig() {
    const http = this.injector.get(HttpClient);
    return http
      .get('/assets/env-config/env-config.json', noCacheHttpOptions)
      .toPromise()
      .then(data => {
        this.envConfig = data;
      });
  }

  public getConfig() {
    return this.envConfig;
  }
}

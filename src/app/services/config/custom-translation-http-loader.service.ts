import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { noCacheHttpOptions } from './http-options';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslationHttpLoaderService implements TranslateLoader {
  public prefix = '/assets/i18n/properties/';
  public suffix = '.json';

  constructor(private http: HttpClient) {}

  public getTranslation(lang: string): any {
    return this.http.get(
      `${this.prefix}application-${lang}${this.suffix}`,
      noCacheHttpOptions,
    );
  }
}

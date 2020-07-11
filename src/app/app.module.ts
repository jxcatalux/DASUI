import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfigService } from './services/config/config.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomTranslationHttpLoaderService } from './services/config/custom-translation-http-loader.service';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropagateFocusDirective } from './directives/propagate-focus/propagate-focus.directive';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { SearchComponent } from './components/search/search.component';
import { ModalModule } from 'ngx-bootstrap';

export function HttpLoaderFactory(http: HttpClient) {
  return new CustomTranslationHttpLoaderService(http);
}

const appInitializerFn = (envConfig: ConfigService) => () =>
  envConfig.loadAppConfig();
/*
  export function initConfig(appConfig: AppConfigService) {
    return () => appConfig.loadConfig();
  }
*/

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AuthenticationComponent,
    SiteHeaderComponent,
    PropagateFocusDirective,
    FormFieldErrorComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OverlayModule,
    PortalModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ModalModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService],
    },
  ],
  entryComponents: [SpinnerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

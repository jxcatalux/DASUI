import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { SiteHeaderComponent } from './site-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from 'src/app/services/session/session.service';
import { BsModalService, ModalModule } from 'ngx-bootstrap';

describe('SiteHeaderComponent', () => {
  let component: SiteHeaderComponent;
  let fixture: ComponentFixture<SiteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteHeaderComponent],
      imports: [
        RouterTestingModule,
        ModalModule.forRoot(),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [SessionService, BsModalService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

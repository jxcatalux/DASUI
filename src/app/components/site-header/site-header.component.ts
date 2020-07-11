import { Component, OnInit, TemplateRef } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {}

  get sessionUser() {
    return this.sessionService.sessionUser;
  }

  logoutConfirm(): void {
    this.modalRef.hide();
    this.sessionService.logout();
    setTimeout(() => {
      this.router.navigate([`login`]);
    }, 500);
  }

  logoutDecline(): void {
    this.modalRef.hide();
  }

  openLogout(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}

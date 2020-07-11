import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
})
export class FormFieldErrorComponent implements OnInit {
  @Input()
  show: boolean;

  @Input()
  message: string;

  constructor() {}

  ngOnInit(): void {}
}

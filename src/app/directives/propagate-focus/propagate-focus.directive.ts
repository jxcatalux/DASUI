import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPropagateFocus]',
})
export class PropagateFocusDirective {
  constructor(private el: ElementRef) {}

  @HostListener('focus')
  onFocus() {
    const eleWrapper = this.el.nativeElement.closest('div.input-wrapper');
    if (eleWrapper) {
      eleWrapper.classList.add('inline_wrapper_underline_focus');
    }
    const eleInlineLabel = this.el.nativeElement
      .closest('div.input-wrapper')
      .closest('div.inline-group')
      .querySelector('label.input-label');
    if (eleInlineLabel) {
      eleInlineLabel.classList.add('inline_label_focus');
    }
  }

  @HostListener('blur')
  onBlur() {
    const eleWrapper = this.el.nativeElement.closest('div.input-wrapper');
    if (eleWrapper) {
      eleWrapper.classList.remove('inline_wrapper_underline_focus');
    }
    const eleInlineLabel = this.el.nativeElement
      .closest('div.input-wrapper')
      .closest('div.inline-group')
      .querySelector('label.input-label');
    if (eleInlineLabel) {
      eleInlineLabel.classList.remove('inline_label_focus');
    }
  }
}

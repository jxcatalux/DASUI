import { Injectable } from '@angular/core';
import {
  Overlay,
  OverlayRef,
  CdkOverlayOrigin,
  OverlayConfig,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private globalOverlayRef: OverlayRef = null;
  private originOverlayRefMap: Map<CdkOverlayOrigin, OverlayRef> = new Map();

  constructor(private overlay: Overlay) {}

  public show(origin?: CdkOverlayOrigin) {
    const spinnerOverlayPortal = new ComponentPortal(SpinnerComponent);
    let component = null;
    if (!origin) {
      // Global Spinner
      this.globalOverlayRef = this.overlay.create();
      component = this.globalOverlayRef.attach(spinnerOverlayPortal);
      (component.instance as SpinnerComponent).isGlobal = true;
    } else if (!this.originOverlayRefMap.has(origin)) {
      // Containerized Spinner
      const strategy = this.overlay
        .position()
        .flexibleConnectedTo(origin.elementRef)
        .withPositions([
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
        ]);
      const config = new OverlayConfig({
        height: origin.elementRef.nativeElement.offsetHeight,
        width: origin.elementRef.nativeElement.offsetWidth,
        positionStrategy: strategy,
        scrollStrategy: this.overlay.scrollStrategies.block(),
      });
      const overlayRef = this.overlay.create(config);
      component = overlayRef.attach(spinnerOverlayPortal);
      (component.instance as SpinnerComponent).isGlobal = false;
      this.originOverlayRefMap.set(origin, overlayRef);
    }
  }

  public hide(origin?: CdkOverlayOrigin) {
    if (origin && this.originOverlayRefMap.has(origin)) {
      this.originOverlayRefMap.get(origin).detach();
      this.originOverlayRefMap.delete(origin);
    } else if (!origin && this.globalOverlayRef) {
      this.globalOverlayRef.detach();
    }
  }
}

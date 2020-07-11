import { PropagateFocusDirective } from './propagate-focus.directive';

describe('PropagateFocusDirective', () => {
  const mockElementRef = {
    nativeElement: {
      innerText: '',
    },
  };

  it('should create an instance', () => {
    const directive = new PropagateFocusDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

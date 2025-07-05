import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card, [appCard]',
  host: {
    '[class]': 'classNames',
  }
})
export class Card {
  protected classNames = 'w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm'
}

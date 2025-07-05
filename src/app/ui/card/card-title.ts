import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-title, [appCardTitle]',
  host: {
    '[class]': 'classNames',
  }
})
export class CardTitle {
  protected classNames = 'text-base font-medium text-gray-900'
}

import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-description, [appCardDescription]',
  host: {
    '[class]': 'classNames',
  }
})
export class CardDescription {
  protected classNames = 'text-sm text-gray-500'
}

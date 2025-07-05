import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content, [appCardContent]',
  host: {
    '[class]': 'classNames',
  }
})
export class CardContent {
  protected classNames = 'space-y-6'
}

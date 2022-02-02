import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.scss']
})
export class ProductCounterComponent {
  private readonly _count = new BehaviorSubject<number>(0);
  public readonly count$ = this._count.asObservable();

  public onIncrement(currentValue: number | string): void {
    this._count.next(Number(currentValue) + 1)
  }

  public onDecrement(currentValue: number | string): void {
    if (!Number(currentValue)) {
      return;
    }

    this._count.next(Number(currentValue) - 1)
  }

  public disableDecrementButton(count: number | string): boolean {
    return Number(count) === 0;
  }
}

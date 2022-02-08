import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.scss']
})
export class ProductCounterComponent implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject();
  private readonly _count = new BehaviorSubject<number>(0);
  public readonly count$ = this._count.asObservable();
  @Output() public updateCart = new EventEmitter<number>();

  public ngOnInit() {
    this.count$
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: count => {
          this.updateCart.emit(count);
        }})
  }

  public ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

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

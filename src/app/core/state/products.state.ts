import {Injectable} from '@angular/core';
import {ProductsService} from "../service/products.service";
import {BehaviorSubject, finalize, take} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({providedIn: 'root'})
export class ProductsState {
  private readonly _products = new BehaviorSubject<Product[]>([]);
  public readonly products$ = this._products.asObservable();
  private readonly _error = new BehaviorSubject<boolean>(false);
  public readonly error$ = this._error.asObservable();
  private readonly _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(
    private readonly _productsService: ProductsService
  ) {
  }

  public getProducts(): void {
    this._error.next(false);
    this._loading.next(true);

    this._productsService.getProducts()
      .pipe(
        take(1),
        finalize(() => {
          this._loading.next(false);
        })
      )
      .subscribe({
        next: products => {
          this._products.next(products);
        },
        error: e => {
          this._error.next(true);
        }
      });
  }
}

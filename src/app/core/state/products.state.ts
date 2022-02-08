import {Injectable} from '@angular/core';
import {ProductsService} from "../service/products.service";
import {BehaviorSubject, finalize, map, take} from "rxjs";
import {Product} from "../model/product.model";

interface CartItem {
  id: number;
  price: number;
  quantity: number;
}

@Injectable({providedIn: 'root'})
export class ProductsState {
  private readonly _products = new BehaviorSubject<Product[]>([]);
  private readonly _cart = new BehaviorSubject<Map<number, CartItem>>(new Map());
  private readonly cart$ = this._cart.asObservable();
  public readonly products$ = this._products.asObservable();
  private readonly _error = new BehaviorSubject<boolean>(false);
  public readonly error$ = this._error.asObservable();
  private readonly _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(
    private readonly _productsService: ProductsService
  ) {
    this._cart
      .pipe(map(cart => {
        return {
          cart,
          total: Array.from(cart.values()).reduce((curr, acc) => curr + acc.price, 0)
        }
      }))
      .subscribe({
        next: ({cart, total}) => {
          console.log('cart', cart, total);
        }
      })
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

  public updateCart = (newItem: CartItem): void => {
    const cart = this._cart.getValue();

    if (!newItem.quantity) {
      cart.delete(newItem.id);
    } else {
      cart.set(newItem.id, {
        ...newItem,
      });
    }

    this._cart.next(cart);
  }
}

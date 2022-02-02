import {Injectable} from '@angular/core';
import {ProductsState} from "../state/products.state";

@Injectable({providedIn: 'root'})
export class ProductsFacade {
  public products$ = this._productsState.products$;
  public error$ = this._productsState.error$;
  public loading$ = this._productsState.loading$;
  public getProducts = this._productsState.getProducts.bind(this._productsState);

  constructor(private readonly _productsState: ProductsState) {
  }
}

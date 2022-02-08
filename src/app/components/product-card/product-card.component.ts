import {Component, Input} from '@angular/core';
import {Product} from "../../core/model/product.model";
import {ProductsFacade} from "../../core/facade/products.facade";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() public product!: Product;

  constructor(public readonly productFacade: ProductsFacade) {
  }

  public updateProduct(quantity: number): void {
    this.productFacade.updateCart({
      quantity,
      id: this.product.id,
      price: this.product.price * quantity,
    })
  }

  public get productImage(): string {
    return `../../../assets/images/${this.product?.image}.png`;
  }

  public get backgroundColor(): string {
    return this.product?.color ?? '#FF893B69';
  }
}

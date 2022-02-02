import {Component, Input} from '@angular/core';
import {Product} from "../../core/model/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() public product!: Product;

  public get productImage(): string {
    return `../../../assets/images/${this.product?.image}.png`;
  }

  public get backgroundColor(): string {
    return this.product?.color ?? '#FF893B69';
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductsFacade} from "./core/facade/products.facade";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly title = 'Sysret Challenge';

  constructor(public readonly productsFacade: ProductsFacade) {
  }

  public ngOnInit(): void {
    this.productsFacade.getProducts();
  }
}

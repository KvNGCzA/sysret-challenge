import {Injectable} from '@angular/core';
import {ProductsServiceMock} from "./products.service.mock";

@Injectable({providedIn: 'root'})
export class ProductsService extends ProductsServiceMock {
}

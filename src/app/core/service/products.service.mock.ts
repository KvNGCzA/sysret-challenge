import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../model/product.model";

const MOCK_DATA = [{
  name: 'Coca-Cola',
  isSponsored: true,
  volume: '1.5l',
  price: 5.45,
  image: 'coke',
  color: '#FFF6F0'
}, {
  name: 'Sprite',
  isSponsored: true,
  volume: '1.5l',
  price: 4.95,
  image: 'sprite',
  color: '#ECFFEB'
}, {
  name: 'Mountain Dew',
  isSponsored: true,
  volume: '1.5l',
  price: 5.45,
  image: 'mountain-dew',
  color: '#EAF2FD'
}, {
  name: 'Coca-Cola',
  isSponsored: true,
  volume: '1.5l',
  price: 5.45,
  image: 'coke',
  color: '#FFF6F0'
}, {
  name: 'Sprite',
  isSponsored: true,
  volume: '1.5l',
  price: 4.95,
  image: 'sprite',
  color: '#ECFFEB'
}, {
  name: 'Mountain Dew',
  isSponsored: true,
  volume: '1.5l',
  price: 5.45,
  image: 'mountain-dew',
  color: '#EAF2FD'
}, {
  name: 'Coca-Cola',
  isSponsored: true,
  volume: '1.5l',
  price: 5.45,
  image: 'coke',
  color: '#FFF6F0'
}, {
  name: 'Sprite',
  isSponsored: true,
  volume: '1.5l',
  price: 4.95,
  image: 'sprite',
  color: '#ECFFEB'
}, {
  name: 'Mountain Dew',
  isSponsored: true,
  volume: '1.5l',
  price: 5.45,
  image: 'mountain-dew',
  color: '#EAF2FD'
}]

@Injectable({providedIn: 'root'})
export class ProductsServiceMock {
  public getProducts(): Observable<Product[]> {
    return of(MOCK_DATA);
  }
}

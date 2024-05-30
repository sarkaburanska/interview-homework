import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {WarehouseItem} from "../../core/models/warehouseItem";

@Injectable({
  providedIn: 'root'
})
export class ProductsMockService {
  #mockedProducts = [{
    _id: 1,
    imageUrl: 'assets/logo_black.svg',
    name: 'CloudTalk logo sticker',
    label: 'logo_sticker',
    description: 'High-quality sticker of the best cloud calling solution provider in  the world',
    quantity: 100,
    price: 1,
    unit: 'piece'
  }]

  constructor() {
  }

  getProducts(): Observable<WarehouseItem[]> {
    return of(this.#mockedProducts)
  }

  addToShipment(id: number): void {
    const item = this.#mockedProducts.find(item => item._id === id)
    // add to shipment logic
  }
}

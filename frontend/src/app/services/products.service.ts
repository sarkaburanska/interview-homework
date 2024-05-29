import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {WarehouseItem} from "../core/models/warehouseItem";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api: ApiService) {}

  getProducts(): Observable<WarehouseItem[]> {
    return this.api.get<WarehouseItem[]>('products');
  }
}

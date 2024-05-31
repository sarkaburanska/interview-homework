import {omit} from 'ramda';
import {Component, EventEmitter, Output} from '@angular/core';
import {WarehouseItem} from "../../core/models/warehouseItem";
import {ProductsService} from "../../services/products.service";
import {ShipmentsService} from "../../services/shipments.service";
import {ShipmentItem} from "../../core/models/shipmentItem";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter();
  products: WarehouseItem[];
  loading = false;

  constructor(private productsService: ProductsService, private shipmentsService: ShipmentsService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe((items: WarehouseItem[]) => {
      this.products = items;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }

  addItemToShipment(id: number): void {
    this.toggleForm.emit(true);
    const item: WarehouseItem = this.products.find((item) => item._id === id)!;
    const clonedItem: ShipmentItem = omit(['_id', 'name', 'imageUrl', 'unit'], {...item, quantity: 1});
    this.shipmentsService.addToShipment(clonedItem)
  }

  protected readonly length = length;
}

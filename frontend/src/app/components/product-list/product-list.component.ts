import {Component, EventEmitter, Output} from '@angular/core';
import {WarehouseItem} from "../../core/models/warehouseItem";
import {ProductsService} from "../../services/products.service";
import {ShipmentsService} from "../../services/shipments.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter();
  products: WarehouseItem[];

  constructor(private productsService: ProductsService, private shipmentsService: ShipmentsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((items: WarehouseItem[]) => {
      this.products = items;
    });
  }

  addItemToShipment(id: number): void {
    this.toggleForm.emit(true);
    const item: WarehouseItem = this.products.find((item) => item._id === id)!;
    const clonedItem: WarehouseItem = {...item, quantity: 1};
    this.shipmentsService.addToShipment(clonedItem)
  }
}

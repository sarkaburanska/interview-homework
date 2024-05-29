import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseItem} from "../../../core/models/warehouseItem";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() item: WarehouseItem
  @Output() addToShipment: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }
}

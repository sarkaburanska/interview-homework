import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WarehouseItem} from "../../../core/models/warehouseItem";
import {ShipmentItem} from "../../../core/models/shipmentItem";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() item: WarehouseItem
  @Input() showAddButton: boolean = true;
  @Output() addToShipment: EventEmitter<void> = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {
  }
}

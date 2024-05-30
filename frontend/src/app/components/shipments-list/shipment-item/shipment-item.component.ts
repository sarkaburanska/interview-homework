import {Component, Input, OnInit} from '@angular/core';
import {WarehouseItem} from "../../../core/models/warehouseItem";
import {ShipmentItem} from "../../../core/models/shipmentItem";

@Component({
  selector: 'app-shipment-item',
  templateUrl: './shipment-item.component.html',
  styleUrls: ['./shipment-item.component.scss']
})
export class ShipmentItemComponent implements OnInit {
  @Input() item: ShipmentItem

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShipmentItem} from "../../../core/models/shipmentItem";

@Component({
  selector: 'app-shipment-item',
  templateUrl: './shipment-item.component.html',
  styleUrls: ['./shipment-item.component.scss']
})
export class ShipmentItemComponent {
  @Input() item: ShipmentItem
  @Output() updateShipment: EventEmitter<void> = new EventEmitter<void>()
  @Output() deleteShipment: EventEmitter<void> = new EventEmitter<void>()

  panelOpenState = false;

  constructor() { }
}

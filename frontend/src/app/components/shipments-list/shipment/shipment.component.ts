import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Shipment} from "../../../core/models/shipment";

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent {
  @Input() item: Shipment
  @Output() updateShipment: EventEmitter<void> = new EventEmitter<void>()

  @Output() deleteShipment: EventEmitter<void> = new EventEmitter<void>()
  panelOpenState = false;

  constructor() { }
}

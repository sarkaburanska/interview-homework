import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WarehouseItem} from "../../core/models/warehouseItem";
import {ShipmentItem} from "../../core/models/shipmentItem";
import {ProductsService} from "../../services/products.service";
import {ShipmentsService} from "../../services/shipments.service";

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent implements OnInit {
  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter();
  id: number | undefined;
  createdAt: string | undefined;
  items: WarehouseItem[];
  shipmentDate: string;
  companyName: string;


  constructor(private productsService: ProductsService, private shipmentsService: ShipmentsService) {
  }

  ngOnInit(): void {
    this.shipmentsService.currentShipment.subscribe((shipment: ShipmentItem) => {
      this.id = shipment._id;
      this.createdAt = shipment.createdAt;
      this.shipmentDate = shipment.shipmentDate;
      this.items = shipment.items;
      this.companyName = shipment.companyName;
    })
  }

  onSubmit() {
    if (!this.isValid()) {
      alert('Please add some items!');
      return;
    }

    const newShipment: ShipmentItem = {
      _id: this.id,
      createdAt: this.createdAt,
      shipmentDate: this.shipmentDate,
      items: this.items,
      companyName: this.companyName,
    };

    if (this.id) {
      this.shipmentsService.updateShipment(newShipment).subscribe(() => {
        this.clearForm();
        this.toggleForm.emit(false);
      });
    } else {
      this.shipmentsService.createShipment(newShipment).subscribe(() => {
        this.clearForm();
        this.toggleForm.emit(false);
      });
    }
  }

  isValid(): boolean {
    return Boolean(this.shipmentDate && this.items.length > 0 && this.companyName);
  }

  clearForm() {
    this.shipmentDate = '';
    this.items = [];
    this.companyName = '';
  }

  onCancel() {
    this.clearForm();
    this.toggleForm.emit(false);
  }
}

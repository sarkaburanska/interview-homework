import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {WarehouseItem} from "../../core/models/warehouseItem";
import {Shipment, Status} from "../../core/models/shipment";
import {ProductsService} from "../../services/products.service";
import {ShipmentsService} from "../../services/shipments.service";
import {ShipmentItem} from "../../core/models/shipmentItem";

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent implements OnInit {
  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter();
  id: number | undefined;
  createdAt: string | undefined;
  items: ShipmentItem[];
  shipmentDate: string
  companyName: string;
  status: Status | undefined;
  error: string;

  statusValues = Object.values(Status);

  constructor(private shipmentsService: ShipmentsService) {
  }

  ngOnInit(): void {
    this.shipmentsService.currentShipment.subscribe((shipment: Shipment) => {
      if (!this.id) {
        this.id = shipment._id;
      }
      if (!this.createdAt) {
        this.createdAt = shipment.createdAt;
      }
      if (!this.shipmentDate) {
        this.shipmentDate = shipment.shipmentDate;
      }
      if (!this.items) {
        this.items = shipment.items;
      }
      if (!this.companyName) {
        this.companyName = shipment.companyName;
      }
      if (!this.status) {
        this.status = shipment.status;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)
    if (changes['items'] && changes['shipmentDate'] && changes['companyName']) {
      const updatedShipment: Shipment = {
        _id: this.id,
        createdAt: this.createdAt,
        shipmentDate: this.shipmentDate,
        items: this.items,
        companyName: this.companyName,
        status: this.status,
      };
      this.shipmentsService.setCurrentShipment(updatedShipment);
    }
  }

  onSubmit() {
    if (!this.isValid()) {
      this.error = 'Please fill all fields';
      return;
    }
    this.error = '';

    const newShipment: Shipment = {
      _id: this.id,
      createdAt: this.createdAt,
      shipmentDate: this.shipmentDate,
      items: this.items,
      companyName: this.companyName,
      status: this.status,
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

  dateFilter(date: Date | null): boolean {
    // Allow only future dates.
    return date ? date > new Date() : false;
  };

  isValid(): boolean {
    return Boolean(this.shipmentDate && this.items.length > 0 && this.companyName);
  }

  clearForm() {
    this.shipmentDate = '';
    this.items = [];
    this.companyName = '';
    this.status = undefined;
  }

  onCancel() {
    this.clearForm();
    this.toggleForm.emit(false);
  }

  protected readonly Status = Status;
}

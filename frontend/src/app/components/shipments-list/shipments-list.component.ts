import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ShipmentItem} from "../../core/models/shipmentItem";
import {ApiService} from "../../services/api.service";
import {WarehouseItem} from "../../core/models/warehouseItem";
import {ProductsService} from "../../services/products.service";
import {ShipmentsService} from "../../services/shipments.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shipments-list',
  templateUrl: './shipments-list.component.html',
  styleUrls: ['./shipments-list.component.scss']
})
export class ShipmentsListComponent implements OnInit {
  shipments: ShipmentItem[];

  constructor(private shipmentsService: ShipmentsService, private router: Router) {
  }

  ngOnInit(): void {
    this.shipmentsService.getShipments().subscribe((items: ShipmentItem[]) => {
      this.shipments = items;
    });
  }

  updateShipment(id: number) {
    const shipment = this.shipments.find((shipment: ShipmentItem) => shipment.id === id);
    if (!shipment) {
      return;
    }
    this.shipmentsService.setCurrentShipment(shipment);
    this.router.navigate(['/products', {form: true}]);
  }

  deleteShipment(id: number) {
    this.shipmentsService.deleteShipment(id).subscribe(() => {
      this.shipments = this.shipments.filter((shipment: ShipmentItem) => shipment.id !== id);
    });
  }
}

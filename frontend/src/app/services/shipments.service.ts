import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ShipmentItem} from "../core/models/shipmentItem";
import {WarehouseItem} from "../core/models/warehouseItem";

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  private _currentShipment: BehaviorSubject<ShipmentItem> = new BehaviorSubject<ShipmentItem>({
    items: [],
    companyName: '',
    shipmentDate: '',
  });

  currentShipment: Observable<ShipmentItem> = this._currentShipment.asObservable();


  constructor(private api: ApiService) {}

  setCurrentShipment(shipment: ShipmentItem): void {
    this._currentShipment.next(shipment);
  }

  getShipments(): Observable<ShipmentItem[]> {
    return this.api.get<ShipmentItem[]>('shipments');
  }

  createShipment(shipment: ShipmentItem): Observable<ShipmentItem> {
    return this.api.post<ShipmentItem>('shipments', shipment);
  }

  updateShipment(shipment: ShipmentItem): Observable<ShipmentItem> {
    return this.api.put<ShipmentItem>(`shipments/${shipment._id}`, shipment);
  }

  deleteShipment(id: number): Observable<ShipmentItem> {
    return this.api.delete<ShipmentItem>(`shipments/${id}`);
  }

  addToShipment(item: WarehouseItem): void {
    if (!this._currentShipment.value) {
      this._currentShipment.next({companyName: "", shipmentDate: "", items: [item]});
    } else {
      let updatedShipment = {...this._currentShipment.value};
      updatedShipment.items.push(item);
      this._currentShipment.next(updatedShipment);
    }
  }
}

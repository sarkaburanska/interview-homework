import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Shipment} from "../core/models/shipment";
import {ShipmentItem} from "../core/models/shipmentItem";

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  private _currentShipment: BehaviorSubject<Shipment> = new BehaviorSubject<Shipment>({
    items: [],
    companyName: '',
    shipmentDate: '',
    status: undefined,
  });

  currentShipment: Observable<Shipment> = this._currentShipment.asObservable();


  constructor(private api: ApiService) {
  }

  setCurrentShipment(shipment: Shipment): void {
    this._currentShipment.next(shipment);
  }

  getShipments(): Observable<Shipment[]> {
    return this.api.get<Shipment[]>('shipments');
  }

  createShipment(shipment: Shipment): Observable<Shipment> {
    return this.api.post<Shipment>('shipments', shipment);
  }

  updateShipment(shipment: Shipment): Observable<Shipment> {
    return this.api.put<Shipment>(`shipments/${shipment._id}`, shipment);
  }

  deleteShipment(id: number): Observable<Shipment> {
    return this.api.delete<Shipment>(`shipments/${id}`);
  }

  addToShipment(item: ShipmentItem): void {
    let updatedShipment = {...this._currentShipment.value};
    updatedShipment.items.push(item);
    this._currentShipment.next(updatedShipment);
  }
}

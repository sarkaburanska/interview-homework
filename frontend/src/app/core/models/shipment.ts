import {ShipmentItem} from "./shipmentItem";

export enum Status {
  CREATED = "created",
  SHIPPED = "shipped",
  PREPARED = "prepared"
}
export interface Shipment {
  _id?: number
  companyName: string
  createdAt?: string
  shipmentDate: string
  items: ShipmentItem[],
  status?: Status,
}

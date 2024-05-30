import {WarehouseItem} from "./warehouseItem";

export interface ShipmentItem {
  _id?: number
  companyName: string
  createdAt?: string
  shipmentDate: string
  items: WarehouseItem[],
  status?: "created" | "shipped" | "prepared";
}

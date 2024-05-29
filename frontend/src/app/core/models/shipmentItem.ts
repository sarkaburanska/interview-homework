import {WarehouseItem} from "./warehouseItem";

export interface ShipmentItem {
  id?: number
  companyName: string
  createdAt?: string
  shipmentDate: string
  items: WarehouseItem[],
}

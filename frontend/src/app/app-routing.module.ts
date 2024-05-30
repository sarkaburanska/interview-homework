import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./pages/products/products.component";
import {ShipmentsComponent} from "./pages/shipments/shipments.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'shipments', component: ShipmentsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

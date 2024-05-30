import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ShipmentsListComponent} from "./components/shipments-list/shipments-list.component";
import {ProductItemComponent} from "./components/product-list/product-item/product-item.component";
import {ShipmentComponent} from "./components/shipments-list/shipment/shipment.component";
import {MenuComponent} from './components/menu/menu.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {ShipmentsComponent} from "./pages/shipments/shipments.component";
import {ProductsComponent} from "./pages/products/products.component";
import {InfoBarComponent} from './components/info-bar/info-bar.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {ShipmentFormComponent} from './components/shipment-form/shipment-form.component';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {ShipmentItemComponent} from "./components/shipments-list/shipment-item/shipment-item.component";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ShipmentComponent,
    ShipmentsListComponent,
    MenuComponent,
    ProductsComponent,
    ShipmentsComponent,
    InfoBarComponent,
    ShipmentFormComponent,
    ShipmentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatAutocompleteModule,
    MatMomentDateModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  exports: [
    ProductListComponent,
    ShipmentsListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

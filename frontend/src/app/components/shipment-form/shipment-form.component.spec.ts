import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShipmentFormComponent} from './shipment-form.component';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ShipmentFormComponent', () => {
  let component: ShipmentFormComponent;
  let fixture: ComponentFixture<ShipmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipmentFormComponent],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShipmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

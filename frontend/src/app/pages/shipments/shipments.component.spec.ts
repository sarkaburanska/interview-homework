import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsComponent } from './shipments.component';
import {ShipmentsListComponent} from "../../components/shipments-list/shipments-list.component";

describe('ShipmentsComponent', () => {
  let component: ShipmentsComponent;
  let fixture: ComponentFixture<ShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

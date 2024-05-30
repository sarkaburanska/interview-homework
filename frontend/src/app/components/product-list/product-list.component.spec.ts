import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {ProductListComponent} from './product-list.component';
import {ProductsMockService} from "./products.mock.service";
import {ProductItemComponent} from "./product-item/product-item.component";
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
import {WarehouseItem} from "../../core/models/warehouseItem";
import {InfoBarComponent} from "../info-bar/info-bar.component";

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productsMockService: ProductsMockService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [HttpClientModule],
      providers: [ProductsMockService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productsMockService = TestBed.inject(ProductsMockService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have items after Angular calls ngOnInit', waitForAsync(() => {
    const mockProducts: WarehouseItem[] =
      [
        {
          _id: 1,
          name: 'Product 1',
          quantity: 10,
          imageUrl: 'assets/logo_black.svg',
          description: 'desc',
          unit: 'unit',
          price: 1,
          label: 'label'
        },
        {
          _id: 2,
          name: 'Product 2',
          quantity: 20,
          imageUrl: 'assets/logo_black.svg',
          description: 'desc',
          unit: 'unit',
          price: 1,
          label: 'label'
        },
      ];
    spyOn(productsMockService, 'getProducts').and.returnValue(of(mockProducts));
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.products.length).toBeGreaterThan(0);
    });
  }));
});

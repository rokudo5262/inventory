import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductGroupPageComponent } from './product-group-page.component';

describe('ProductGroupPageComponent', () => {
  let component: LocationDetailComponent;
  let fixture: ComponentFixture<ProductGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreSmartTableComponent } from './store-smart-table.component';


describe('StoreSmartTableComponent', () => {
  let component: StoreSmartTableComponent;
  let fixture: ComponentFixture<StoreSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

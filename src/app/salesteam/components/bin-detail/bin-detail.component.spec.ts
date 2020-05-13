import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BinDetailComponent } from './bin-detail.component';


describe('BinDetailComponent', () => {
  let component: BinDetailComponent;
  let fixture: ComponentFixture<BinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

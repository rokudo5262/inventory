import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BinDetail2Component } from './bin-detail-2.component';


describe('BinDetail2Component', () => {
  let component: BinDetail2Component;
  let fixture: ComponentFixture<BinDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

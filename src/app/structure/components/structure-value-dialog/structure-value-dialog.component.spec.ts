import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureValueDetailComponent } from './structure-value-detail.component';


describe('StructureValueDetailComponent', () => {
  let component: StructureValueDetailComponent;
  let fixture: ComponentFixture<StructureValueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureValueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureValueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

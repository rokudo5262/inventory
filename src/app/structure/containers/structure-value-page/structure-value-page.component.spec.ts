import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureValuePageComponent } from './structure-value-page.component';


describe('StructureValuePageComponent', () => {
  let component: StructureValuePageComponent;
  let fixture: ComponentFixture<StructureValuePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureValuePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureValuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

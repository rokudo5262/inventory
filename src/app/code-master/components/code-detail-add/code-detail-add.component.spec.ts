import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeDetailAddComponent } from './code-detail-add.component';


describe('CodeDetailAddComponent', () => {
  let component: CodeDetailAddComponent;
  let fixture: ComponentFixture<CodeDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMasterAddComponent } from './code-master-add.component';


describe('CodeMasterAddComponent', () => {
  let component: CodeMasterAddComponent;
  let fixture: ComponentFixture<CodeMasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

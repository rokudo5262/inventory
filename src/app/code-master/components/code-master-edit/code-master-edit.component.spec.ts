import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMasterEditComponent } from './code-master-edit.component';


describe('CodeMasterEditComponent', () => {
  let component: CodeMasterEditComponent;
  let fixture: ComponentFixture<CodeMasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

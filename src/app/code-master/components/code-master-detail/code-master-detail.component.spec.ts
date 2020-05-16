import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMasterDetailComponent } from './code-master-detail.component';


describe('CodeMasterDetailComponent', () => {
  let component: CodeMasterDetailComponent;
  let fixture: ComponentFixture<CodeMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

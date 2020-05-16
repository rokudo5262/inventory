import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('CodeMasterSelectComponent', () => {
  let component: CodeMasterSelectComponent;
  let fixture: ComponentFixture<CodeMasterSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMasterSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMasterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

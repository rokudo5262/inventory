import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeDetailListComponent } from './code-detail-list.component';


describe('CodeDetailListComponent', () => {
  let component: CodeDetailListComponent;
  let fixture: ComponentFixture<CodeDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

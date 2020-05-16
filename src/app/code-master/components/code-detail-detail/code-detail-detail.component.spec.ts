import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeDetailDetailComponent } from './code-detail-detail.component';

describe('CodeDetailDetailComponent', () => {
  let component: CodeDetailDetailComponent;
  let fixture: ComponentFixture<CodeDetailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDetailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

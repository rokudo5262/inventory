import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../pages/states/material';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ViewBookPageComponent } from './view-book-page.component';
import { ViewBookPageActions } from '../actions';
import { Book } from '@appdata';

describe('View Book Page', () => {
  // let fix: ComponentFixture<ViewBookPageComponent>;
  let store: MockStore<Book>;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: new BehaviorSubject({}) },
        },
        provideMockStore(),
      ],
      declarations: [
        ViewBookPageComponent,
      ],
    });

    // fix = TestBed.createComponent(ViewBookPageComponent);
    store = TestBed.get(MockStore);
    route = TestBed.get(ActivatedRoute);

    jest.spyOn(store, 'dispatch');
  });

  it('should dispatch a book.Select action on init', () => {
    const action = ViewBookPageActions.selectBook({ id: '2' });

    (route.params as BehaviorSubject<any>).next({ id: '2' });

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});

import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
@Component({
    selector: 'ngx-bc-view-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <h1>View</h1>
        <ngx-bc-selected-book-page></ngx-bc-selected-book-page>
    `,
})
export class ViewBookPageComponent implements OnDestroy {
    actionsSubscription: Subscription;

    // constructor(store: Store<BookState>, route: ActivatedRoute) {
    //     // Convert to action, then dispatch the action.
    //     this.actionsSubscription = route.params
    //          .pipe(map(params => ViewBookPageActions.selectBook({ id: params.id })))
    //          .subscribe(action => store.dispatch(action));
    // }

    ngOnDestroy() {
        this.actionsSubscription.unsubscribe();
    }
}

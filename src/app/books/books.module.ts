import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { ViewBookPageComponent, SelectedBookPageComponent, CollectionPageComponent } from './containers';
import { MiscellaneousModule } from '@dashboard/miscellaneous/miscellaneous.module';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { MaterialModule } from '@dashboard/states/material';
import { BooksComponent } from './books.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookPreviewListComponent } from './components/book-preview-list/book-preview-list.component';
import { BookAuthorsComponent } from './components/book-authors/book-authors.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from '@appbooks/reducers';
import { ThemeModule } from '@app/@theme/theme.module';
import { EffectsModule } from '@ngrx/effects';
import { CollectionEffects, BookEffects } from './effects';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { LibraryPageComponent } from './containers/library-page/library.component';
import { NbCardModule } from '@nebular/theme';

export const CONTAINERS = [
    // FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,
    CollectionPageComponent,
    LibraryPageComponent,
];

export const COMPONENTS = [
    BookDetailComponent,
    BooksComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookAuthorsComponent,
    BookSearchComponent,
];

@NgModule({
    imports: [
        CommonModule,
        NbCardModule,
        MaterialModule,
        MiscellaneousModule,
        ThemeModule,
        BooksRoutingModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([BookEffects, CollectionEffects]),
    ],
    declarations: [CONTAINERS, COMPONENTS],
})
export class BooksModule { }

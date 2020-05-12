import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionPageComponent } from './containers';
import { BooksComponent } from './books.component';
import { LibraryPageComponent } from './containers/library.component';

const routes: Routes = [
    // {
    //     path: ':id',
    //     component: ViewBookPageComponent,
    //     data: { title: 'Book details' },
    // },
    {
        path: '',
        component: BooksComponent,
        // data: { title: 'Collection' },
        children: [
            { path: 'library', component: LibraryPageComponent },
            { path: 'collection', component: CollectionPageComponent },
            { path: '', redirectTo: 'library', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class BooksRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionPageComponent } from './containers';
import { BooksComponent } from './books.component';
import { LibraryPageComponent } from './containers/library-page/library.component';

const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
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

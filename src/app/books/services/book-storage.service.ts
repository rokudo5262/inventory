import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Book } from '@app/@core/data';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export function storageFactory() {
    return typeof window === 'undefined' || typeof localStorage === 'undefined'
        ? null
        : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken(
    'examples-local-storage',
    { factory: storageFactory },
);

@Injectable({ providedIn: 'root' })
export class BookStorageService {
    private collectionKey = 'books-app';

    supported(): Observable<boolean> {
        return this.storage !== null
          ? of(true)
          : throwError('Local Storage Not Supported');
      }

    getCollection(): Observable<Book[]> {
        return this.supported().pipe(
            map(_ => this.storage.getItem(this.collectionKey)),
            map((value: string | null) => (value ? JSON.parse(value) : [])),
        );
    }

    constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}

}

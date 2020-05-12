import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductGroupService } from '../services';
import {
  ProductGroupApiActions,
  ProductGroupCollectionApiActions,
  AddProductGroupActions
} from '../actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { ProductGroup } from '@appdata';
import { of, empty } from 'rxjs';

@Injectable()
export class ProductGroupEffects {
  productgroup$ = createEffect(() => this.actions$.pipe(
    ofType(ProductGroupApiActions.getProductGroups),
    mergeMap(() => this.productgroupService.getProductGroups().pipe(
      map((items: ProductGroup[]) => ProductGroupCollectionApiActions
        .loadProductGroupSuccess({ productgroups: items })),
      catchError(err => of(ProductGroupCollectionApiActions
        .loadProductGroupFailure({ errorMsg: err.message })))
    ))
  ));
  create$ = createEffect(() => this.actions$.pipe(
    ofType(AddProductGroupActions.addProductGroup),
    switchMap(({ addProductGroup }) =>
      this.productgroupService.addProductGroup(addProductGroup).pipe(
        map((item: ProductGroup) => AddProductGroupActions
          .addProductGroupSuccess({ addProductGroup: item })),
        catchError(error => of(AddProductGroupActions
          .addgoodgroupFailure({ errorMsg: error.message })))
      ))
  ));
  update$ = createEffect(() => this.actions$.pipe(
    ofType(ProductGroupApiActions.updateProductGroup),
    switchMap(({ update }) => this.productgroupService.updateProductGroup(update.changes).pipe(
      map((item: ProductGroup) => ProductGroupCollectionApiActions
        .updateProductGroupSuccess({ update: { id: item.id, changes: item } })),
      catchError(error => of(ProductGroupCollectionApiActions
        .updateProductGroupFailure({ errorMsg: error.message })))
    ))
  ));
  remove$ = createEffect(() => this.actions$.pipe(
    ofType(ProductGroupApiActions.removeProductGroup),
    switchMap(({ id }) => {
      if (id <= 0) {
        return empty;
      }
      return this.productgroupService.removeProductGroup(id).pipe(
        map((item: ProductGroup) => ProductGroupCollectionApiActions
          .removeProductGroupSuccess({ id: item ? item.id : 0 })),
        catchError(() => of(ProductGroupCollectionApiActions
          .removeProductGroupFailure({ errorMsg: 'Delete Failure' })))
      );
    })
  ));
  constructor(
    private actions$: Actions,
    private productgroupService: ProductGroupService,
  ) { }
}

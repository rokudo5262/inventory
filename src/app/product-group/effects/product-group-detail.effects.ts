import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductGroupCollectionApiActions, ProductGroupDetailActions } from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProductGroupDetail } from '@appdata';
import { of } from 'rxjs';
import { ProductGroupDetailService } from '../services/product-group-detail.service';

@Injectable()
export class ProductGroupDetailEffects {
  productgroupdetail$ = createEffect(() => this.actions$.pipe(
    ofType(ProductGroupDetailActions.getProductGroupDetails),
    mergeMap(() => this.productgroupdetailService.getProductGroupDetails().pipe(
      map((items: ProductGroupDetail[]) => ProductGroupCollectionApiActions
        .loadProductGroupDetailSuccess({ productgroupdetail: items })),
      catchError(err => of(ProductGroupCollectionApiActions
        .loadProductGroupDetailFailure({ errorMsg: err.message }))),
    ))
  ));
  constructor(
    private actions$: Actions,
    private productgroupdetailService: ProductGroupDetailService,
  ) { }
}

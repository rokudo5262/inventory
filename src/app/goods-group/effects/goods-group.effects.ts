import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoodsGroupService } from '../services';
import { GoodsGroupApiActions, GoodsGroupCollectionApiActions, AddGoodsGroupActions } from '../actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { GoodsGroup } from '@appdata';
import { of, empty } from 'rxjs';

@Injectable()
export class GoodsGroupEffects {
  goodsgroup$ = createEffect(() => this.actions$.pipe(
    ofType(GoodsGroupApiActions.getGoodsGroups),
    mergeMap(() => this.goodsgroupService.getGoodsGroups().pipe(
      map((items: GoodsGroup[]) => GoodsGroupCollectionApiActions.loadGoodsGroupSuccess({ goodsgroups: items })),
      catchError(err => of(GoodsGroupCollectionApiActions.loadGoodsGroupFailure({ errorMsg: err.message })))
    ))
  ));
  create$ = createEffect(() => this.actions$.pipe(
    ofType(AddGoodsGroupActions.addGoodsGroup),
    switchMap(({ addgoodsgroup }) =>
      this.goodsgroupService.addGoodsGroup(addgoodsgroup).pipe(
        map((item: GoodsGroup) =>
          AddGoodsGroupActions.addgoodsgroupSuccess({ addgoodsgroup: item })),
        catchError(error => of(AddGoodsGroupActions.addgoodgroupFailure({ errorMsg: error.message })))
      ))
  ));
  update$ = createEffect(() => this.actions$.pipe(
    ofType(GoodsGroupApiActions.updateGoodsGroup),
    switchMap(({ update }) => this.goodsgroupService.updateGoodsGroup(update.changes).pipe(
      map((item: GoodsGroup) => GoodsGroupCollectionApiActions.updateGoodsGroupSuccess({
        update: { id: item.id, changes: item }
      })),
      catchError(error => of(GoodsGroupCollectionApiActions.updateGoodsGroupFailure({ errorMsg: error.message })))
    ))
  ));
  remove$ = createEffect(() => this.actions$.pipe(
    ofType(GoodsGroupApiActions.removeGoodsGroup),
    switchMap(({ id }) => {
      if (id <= 0) {
        return empty;
      }
      return this.goodsgroupService.removeGoodsGroup(id).pipe(
        map((item: GoodsGroup) => GoodsGroupCollectionApiActions.removeGoodsGroupSuccess({ id: item ? item.id : 0 })),
        catchError(() => of(GoodsGroupCollectionApiActions.removeGoodsGroupFailure({ errorMsg: 'Delete Failure' })))
      );
    })
  ));
  constructor(
    private actions$: Actions,
    private goodsgroupService: GoodsGroupService,
  ) { }
}

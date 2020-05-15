import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoodsGroupService } from '../services';
import { GoodsGroupApiActions, GoodsGroupActions } from '../actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { GoodsGroup } from '@appdata';
import { of, empty } from 'rxjs';

@Injectable()
export class GoodsGroupEffects {
  goodsgroup$ = createEffect(() => this.actions$.pipe(
    ofType(GoodsGroupActions.getGoodsGroups),
    mergeMap(() => this.goodsgroupService.getGoodsGroups().pipe(
      map((items: GoodsGroup[]) => GoodsGroupApiActions
        .loadGoodsGroupSuccess({ goodsgroups: items })),
      catchError(err => of(GoodsGroupApiActions
        .loadGoodsGroupFailure({ errorMsg: err.message })))
    ))
  ));
  create$ = createEffect(() => this.actions$.pipe(
    ofType(GoodsGroupActions.addGoodsGroup),
    switchMap(({ addgoodsgroup }) =>
      this.goodsgroupService.addGoodsGroup(addgoodsgroup).pipe(
        map((item: GoodsGroup) => GoodsGroupApiActions
          .addgoodsgroupSuccess({ addgoodsgroup: item })),
        catchError(error => of(GoodsGroupApiActions
          .addgoodgroupFailure({ errorMsg: error.message })))
      ))
  ));
  update$ = createEffect(() => this.actions$.pipe(
    ofType(GoodsGroupActions.updateGoodsGroup),
    switchMap(({ update }) => this.goodsgroupService.updateGoodsGroup(update.changes).pipe(
      map((item: GoodsGroup) => GoodsGroupApiActions
        .updateGoodsGroupSuccess({
          update: { id: item.id, changes: item }
        })),
      catchError(error => of(GoodsGroupApiActions
        .updateGoodsGroupFailure({ errorMsg: error.message })))
    ))
  ));
  remove$ = createEffect(() => this.actions$.pipe(
    ofType(GoodsGroupActions.removeGoodsGroup),
    switchMap(({ id }) => {
      if (id <= 0) {
        return empty;
      }
      return this.goodsgroupService.removeGoodsGroup(id).pipe(
        map((item: GoodsGroup) => GoodsGroupApiActions
          .removeGoodsGroupSuccess({ id: item ? item.id : 0 })),
        catchError(() => of(GoodsGroupApiActions
          .removeGoodsGroupFailure({ errorMsg: 'Delete Failure' })))
      );
    })
  ));
  constructor(
    private actions$: Actions,
    private goodsgroupService: GoodsGroupService,
  ) { }
}

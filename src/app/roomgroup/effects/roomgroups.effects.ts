import { Injectable } from '@angular/core';
import { RoomGroupsService } from '../services/roomgroups.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { RoomGroupsActions, RoomGroupsApiActions } from '../actions';

@Injectable()
export class RoomGroupEffects {
    load$ = createEffect(() => this.action$.pipe(
        ofType(RoomGroupsActions.loadRoomGroups),
        mergeMap(() => this.roomgroupservice.load_roomgroups()
            .pipe(
                map((items: RoomGroup[]) =>
                    RoomGroupsApiActions.loadRoomGroupsSuccess({ roomgroups: items })),
                catchError(err => of(
                    RoomGroupsApiActions.loadRoomGroupsFailure({ errorMsg: err.message })))
            ))
    ));
    get$ = createEffect(() => this.action$.pipe(
        ofType(RoomGroupsActions.getRoomGroup),
        mergeMap(() => this.roomgroupservice.get_roomgroup()
            .pipe(
                map((items: RoomGroup[]) =>
                    RoomGroupsApiActions.getRoomGroupSuccess({ roomgroups: items })),
                catchError(err => of(
                    RoomGroupsApiActions.getRoomGroupFailure({ errorMsg: err.message })))
            ))
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(RoomGroupsActions.addRoomGroup),
        switchMap(({ roomgroup }) =>
            this.roomgroupservice.add_roomgroup(roomgroup).pipe(
                map((item: RoomGroup) =>
                    RoomGroupsApiActions.addRoomGroupSuccess({
                        roomgroup: item
                    }
                    )),
                catchError(error => of(
                    RoomGroupsApiActions.addRoomGroupFailure({ errorMsg: error.message })))
            ))
    ));

    delete$ = createEffect(() => this.action$.pipe(
        ofType(RoomGroupsActions.deleteRoomGroup),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.roomgroupservice.delete_roomgroup(id).pipe(
                map((item: RoomGroup) =>
                    RoomGroupsApiActions.deleteRoomGroupSuccess({ id: item ? item.id : 0 })),
                catchError(err => of(
                    RoomGroupsApiActions.deleteRoomGroupFailure({ errorMsg: err.message })))
            );
        })
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(RoomGroupsActions.removeRoomGroup),
        switchMap(({ update }) =>
            this.roomgroupservice.remove_roomgroup(update.changes).pipe(
                map(item =>
                    RoomGroupsApiActions.removeRoomGroupSuccess()),
                catchError(error => of(
                    RoomGroupsApiActions.removeRoomGroupFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(RoomGroupsActions.updateRoomGroup),
        switchMap(({ update }) =>
            this.roomgroupservice.update_roomgroup(update.changes).pipe(
                map(item =>
                    RoomGroupsApiActions.updateRoomGroupSuccess()),
                catchError(error => of(
                    RoomGroupsApiActions.updateRoomGroupFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private roomgroupservice: RoomGroupsService,
    ) { }
}

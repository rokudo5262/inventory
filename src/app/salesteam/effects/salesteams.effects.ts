import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { SalesTeam } from '@app/@core/data/salesteam';
import { SalesTeamsService } from '../services';
import { SalesTeamsApiActions, SalesTeamsActions } from '../actions';

@Injectable()
export class SalesTeamEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamsActions.loadSalesTeams),
        mergeMap(() => this.salesteamservice.load_salesteams()
            .pipe(
                map((items: SalesTeam[]) =>
                    SalesTeamsApiActions.loadSalesTeamsSuccess({ salesteams: items })),
                catchError(err => of(SalesTeamsApiActions.loadSalesTeamsFailure({ errorMsg: err.message })))
            ))
    ));
    get$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamsActions.getSalesTeam),
        mergeMap(() => this.salesteamservice.get_salesteam()
            .pipe(
                map((items: SalesTeam[]) =>
                    SalesTeamsApiActions
                        .getSalesTeamSuccess({ salesteams: items })),
                catchError(err => of(SalesTeamsApiActions
                    .getSalesTeamFailure({ errorMsg: err.message })))
            ))
    ));
    // getdetail$ = createEffect(() => this.action$.pipe(
    //     ofType(SalesTeamsApiActions.getSalesTeamdeteils),
    //     switchMap(() => this.salesteamservice.get_salesteam_with_bin()
    //         .pipe(
    //             map((items: SalesTeam[]) =>
    //                 SalesTeamCollectionApiActions
    //                     .getSalesTeamdetailSuccess({ salesteams: items })),
    //             catchError(err => of(SalesTeamCollectionApiActions
    //                 .getSalesTeamdetailFailure({ errorMsg: err.message })))
    //         ))
    // ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamsActions.addSalesTeam),
        switchMap(({ salesteam }) =>
            this.salesteamservice.add_salesteam(salesteam).pipe(
                map((item: SalesTeam) =>
                    SalesTeamsApiActions.addSalesTeamSuccess({
                        salesteam: item
                    }
                    )),
                catchError(error => of(
                    SalesTeamsApiActions.addSalesTeamFailure({ errorMsg: error.message })))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamsActions.deleteSalesTeam),
        switchMap(({ salesTeamCode }) => {
            if (salesTeamCode <= '') {
                return empty;
            }
            return this.salesteamservice.delete_salesteam(salesTeamCode).pipe(
                map((item: SalesTeam) =>
                    SalesTeamsApiActions
                        .deleteSalesTeamSuccess({ salesTeamCode: item ? item.salesTeamCode : '' })),
                catchError(err => of(
                    SalesTeamsApiActions
                        .deleteSalesTeamFailure({ errorMsg: err.message })))
            );
        })
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamsActions.removeSalesTeam),
        switchMap(({ update }) =>
            this.salesteamservice.remove_salesteam(update.changes).pipe(
                map(item =>
                    SalesTeamsApiActions.removeSalesTeamSuccess()),
                catchError(error => of(
                    SalesTeamsApiActions.removeSalesTeamFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamsActions.updateSalesTeam),
        switchMap(({ update }) =>
            this.salesteamservice.update_salesteam(update.changes).pipe(
                map(item =>
                    SalesTeamsApiActions.updateSalesTeamSuccess()),
                catchError(error => of(
                    SalesTeamsApiActions.updateSalesTeamFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private salesteamservice: SalesTeamsService,
    ) { }
}

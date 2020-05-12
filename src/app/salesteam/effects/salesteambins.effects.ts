import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { SalesTeamBinsService } from '../services';
import { SalesTeamBinsActions, SalesTeamBinsApiActions } from '../actions';

@Injectable()
export class SalesTeamBinEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamBinsActions.loadSalesTeamBins),
        mergeMap(() => this.salesteambinservice.load_salesteambins()
            .pipe(
                map((items: SalesTeamBin[]) =>
                    SalesTeamBinsApiActions.loadSalesTeamsSuccess({ salesteambins: items })),
                catchError(err => of(
                    SalesTeamBinsApiActions.loadSalesTeamBinsFailure({ errorMsg: err.message })))
            ))
    ));
    get$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamBinsActions.getSalesTeamBin),
        mergeMap(() => this.salesteambinservice.get_salesteambin()
            .pipe(
                map((items: SalesTeamBin[]) =>
                    SalesTeamBinsApiActions.getSalesTeamBinSuccess({ salesteambins: items })),
                catchError(err => of(
                    SalesTeamBinsApiActions.getSalesTeamBinFailure({ errorMsg: err.message })))
            ))
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamBinsActions.addSalesTeamBin),
        switchMap(({ salesteambin }) =>
            this.salesteambinservice.add_salesteambin(salesteambin).pipe(
                map((item: SalesTeamBin) =>
                SalesTeamBinsApiActions.addSalesTeamBinSuccess({
                        salesteambin: item
                    }
                    )),
                catchError(error => of(
                    SalesTeamBinsApiActions.addSalesTeamBinFailure({ errorMsg: error.message })))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamBinsActions.deleteSalesTeamBin),
        switchMap(({ lineId }) => {
            if (lineId <= 0) {
                return empty;
            }
            return this.salesteambinservice.delete_salesteambin(lineId).pipe(
                map((item: SalesTeamBin) =>
                SalesTeamBinsApiActions.deleteSalesTeamBinSuccess({ lineId: item ? item.lineId : 0 })),
                catchError(err => of(
                    SalesTeamBinsApiActions.deleteSalesTeamBinFailure({ errorMsg: err.message })))
            );
        })
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamBinsActions.removeSalesTeamBin),
        switchMap(({ update }) =>
            this.salesteambinservice.remove_salesteambin(update.changes).pipe(
                map(item =>
                    SalesTeamBinsApiActions.removeSalesTeamBinSuccess()),
                catchError(error => of(
                    SalesTeamBinsApiActions.removeSalesTeamBinFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamBinsActions.updateSalesTeamBin),
        switchMap(({ update }) =>
            this.salesteambinservice.update_salesteambin(update.changes).pipe(
                map(item =>
                    SalesTeamBinsApiActions.updateSalesTeamBinSuccess()),
                catchError(error => of(
                    SalesTeamBinsApiActions.updateSalesTeamBinFailure({ errorMsg: error.message })))
            ))
    ));
    delete_mutiple$ = createEffect(() => this.action$.pipe(
        ofType(SalesTeamBinsActions.deleteMultipleSalesTeamBin),
        switchMap(({ lineIds }) => {
            if (lineIds === []) {
                return empty;
            }
            return this.salesteambinservice.delete_multiple_saleteambin(lineIds).pipe(
                map((items: SalesTeamBin[]) => {
                    const lineIds: number[] = [];
                    items.forEach(item => lineIds.push(item.lineId));
                    return SalesTeamBinsApiActions
                    .deleteMultipleSalesTeamBinSuccess({ lineIds: lineIds });
                }),
                catchError(error => of(SalesTeamBinsApiActions
                    .deleteSalesTeamBinFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private salesteambinservice: SalesTeamBinsService,
    ) { }
}

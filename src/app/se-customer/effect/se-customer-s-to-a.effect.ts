import { Injectable } from '@angular/core';
import { SecondaryCustomerShipToAddressApiActions, SecondaryCustomerShipToAddressCollectionApiActions } from '../actions';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { SecondaryCustomerShipToAddresssService } from '../service/se-customer-s-to-a.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of, empty } from 'rxjs';

@Injectable()
export class SecondaryCustomerShipToAddressEffects {
    secustomerstoas$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerShipToAddressApiActions.getSECustomerStoAs),
        mergeMap(() => this.secustomerstoaService.getSecondaryCustomerShipToAddresss()
            .pipe(
                map((items: SecondaryCustomerShipToAddress[]) => SecondaryCustomerShipToAddressCollectionApiActions
                    .loadSECustomerStoASuccess({ secustomerstoas: items })),
                catchError(error => of(SecondaryCustomerShipToAddressCollectionApiActions
                    .loadSECustomerStoAFailure({ errorMsg: error.message })))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerShipToAddressApiActions.addSECustomerStoA),
        switchMap(({ secustomerstoa }) =>
            this.secustomerstoaService.addSecondaryCustomerShipToAddress(secustomerstoa).pipe(
                map((item: SecondaryCustomerShipToAddress) => SecondaryCustomerShipToAddressCollectionApiActions
                    .addSECustomerStoASuccess({ secustomerstoa: item })),
                catchError(error => of(SecondaryCustomerShipToAddressCollectionApiActions
                    .addSECustomerStoAFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerShipToAddressApiActions.updateSECustomerStoA),
        switchMap(({ update }) =>
            this.secustomerstoaService.UpdateSecondaryCustomerShipToAddress(update.changes).pipe(
                map(item => SecondaryCustomerShipToAddressCollectionApiActions
                    .updateSECustomerStoASuccess({
                        update: {
                            id: item.id,
                            changes: item
                        }
                    })),
                catchError(error => of(SecondaryCustomerShipToAddressCollectionApiActions
                    .updateSECustomerStoAFailure({ errorMsg: error.message })))
            ))
    ));
    deletes$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerShipToAddressApiActions.removesSECustomerStoA),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.secustomerstoaService.deletesSecondaryCustomerShipToAddress(ids).pipe(
                map((items: SecondaryCustomerShipToAddress[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return SecondaryCustomerShipToAddressCollectionApiActions
                        .removesSECustomerStoASuccess({ ids: ids });
                }),
                catchError(error => of(SecondaryCustomerShipToAddressCollectionApiActions
                    .removesSECustomerStoAFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private secustomerstoaService: SecondaryCustomerShipToAddresssService
    ) { }
}

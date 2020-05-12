import { createReducer, on } from '@ngrx/store';
import { SalesTeamBinInitialState, salesteambinAdapter } from '../states/salesteambin.state';
import { SalesTeamBinsActions, SalesTeamBinsApiActions } from '../actions';


export const salesteambinsFeatureKey = 'salesteambins';

export const reducer = createReducer(
    SalesTeamBinInitialState,
    on(
        SalesTeamBinsActions.loadSalesTeamBins,
        SalesTeamBinsApiActions.loadSalesTeamsSuccess,
        (state, { salesteambins }) => {
            salesteambins = salesteambins.filter(x => x.deleted === false);
            return salesteambinAdapter.addMany(salesteambins, state);
        }
    ),
    on(
        SalesTeamBinsActions.getSalesTeamBin,
        SalesTeamBinsApiActions.getSalesTeamBinSuccess,
        (state, { salesteambins }) => {
            salesteambins = salesteambins.filter(x => x.deleted === false);
            return salesteambinAdapter.addMany(salesteambins, state);
        }
    ),
    on(
        SalesTeamBinsActions.addSalesTeamBin,
        SalesTeamBinsApiActions.addSalesTeamBinSuccess,
        (state, { salesteambin }) => salesteambinAdapter.addOne(salesteambin, state),
    ),
    on(
        SalesTeamBinsActions.updateSalesTeamBin,
        (state, { update }) => salesteambinAdapter.updateOne(update, state),
    ),
    on(
        SalesTeamBinsActions.removeSalesTeamBin,
        (state, { update }) => salesteambinAdapter.updateOne(update, state),
    ),
    on(
        SalesTeamBinsActions.deleteSalesTeamBin,
        SalesTeamBinsApiActions.deleteSalesTeamBinSuccess,
        (state, { lineId }) => salesteambinAdapter.removeOne(lineId, state),
    ),
);

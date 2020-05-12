import { createReducer, on } from '@ngrx/store';
import { salesteamInitialState, salesteamAdapter } from '../states';
import { SalesTeamsActions, SalesTeamsApiActions } from '../actions';


export const salesteamsFeatureKey = 'salesteams';

export const reducer = createReducer(
    salesteamInitialState,
    on(
        SalesTeamsActions.loadSalesTeams,
        SalesTeamsApiActions.loadSalesTeamsSuccess,
        (state, { salesteams }) => {
            salesteams = salesteams.filter(x => x.deleted === false);
            return salesteamAdapter.addMany(salesteams, state);
        }
    ),
    on(
        SalesTeamsActions.getSalesTeam,
        SalesTeamsApiActions.getSalesTeamSuccess,
        (state, { salesteams }) => {
            salesteams = salesteams.filter(x => x.deleted === false);
            return salesteamAdapter.addMany(salesteams, state);
        }
    ),
    on(
        SalesTeamsActions.addSalesTeam,
        SalesTeamsApiActions.addSalesTeamSuccess,
        (state, { salesteam }) => salesteamAdapter.addOne(salesteam, state),
    ),
    on(
        SalesTeamsActions.updateSalesTeam,
        (state, { update }) => salesteamAdapter.updateOne(update, state),
    ),
    on(
        SalesTeamsActions.removeSalesTeam,
        (state, { update }) => salesteamAdapter.updateOne(update, state),
    ),
    on(
        SalesTeamsActions.deleteSalesTeam,
        SalesTeamsApiActions.deleteSalesTeamSuccess,
        (state, { salesTeamCode }) => salesteamAdapter.removeOne(salesTeamCode, state),
    ),
);

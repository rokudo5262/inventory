import { createSelector } from '@ngrx/store';
import { selectSalesTeamsState } from './salesteam-features.selectors';
import { SalesTeamReducer } from '../reducers';
import { salesteamAdapter } from '../states';
export const selectSalesTeamEntitiesState = createSelector(
  selectSalesTeamsState,
  state => state[SalesTeamReducer.salesteamsFeatureKey],
);
export const {
  selectIds: selectSalesTeamIds,
  selectEntities: selectSalesTeamEntities,
  selectAll: selectAllSalesTeams,
  selectTotal: selectTotalSalesTeams,
} = salesteamAdapter.getSelectors(selectSalesTeamEntitiesState);

export const SalesTeamSelectors = {
  selectSalesTeamEntitiesState,
  selectSalesTeamIds,
  selectSalesTeamEntities,
  selectAllSalesTeams,
  selectTotalSalesTeams,
};
export const selectCurrentSalesTeam = (salesTeamCode) => createSelector(
  selectSalesTeamEntities,
  (salesteams) => salesteams[salesTeamCode],
);

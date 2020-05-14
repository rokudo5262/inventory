import { createSelector } from '@ngrx/store';
import { selectSalesTeamBinsState } from './salesteam-features.selectors';
import { salesteambinAdapter } from '../states';
import { SalesTeamBinReducer } from '../reducers';

export const selectSalesTeamBinEntitiesState = createSelector(
  selectSalesTeamBinsState,
  state => state[SalesTeamBinReducer.salesteambinsFeatureKey],
);

export const {
  selectIds: selectSalesTeamBinCodes,
  selectEntities: selectSalesTeamBinEntities,
  selectAll: selectAllSalesTeamBins,
  selectTotal: selectTotalSalesTeamBins,
} = salesteambinAdapter.getSelectors(selectSalesTeamBinEntitiesState);

export const SalesTeamBinSelectors = {
  selectSalesTeamBinEntitiesState,
  selectSalesTeamBinCodes,
  selectSalesTeamBinEntities,
  selectAllSalesTeamBins,
  selectTotalSalesTeamBins,
};
export const selectCurrentSalesTeamBin = (lineId) => createSelector(
  selectSalesTeamBinEntities,
  (salsesteambin) => salsesteambin[lineId]
);



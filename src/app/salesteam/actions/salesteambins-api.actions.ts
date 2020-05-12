import { createAction, props } from '@ngrx/store';
import { SalesTeamBin } from '@app/@core/data/salesteambin';

/**
 * Load SalesTeamBins Api Actions
 */
export const loadSalesTeamsSuccess = createAction(
  '[SalesTeamBin/API] Load SalesTeamBins Success',
  props<{ salesteambins: SalesTeamBin[] }>(),
);
export const loadSalesTeamBinsFailure = createAction(
  '[SalesTeamBin/API] Load SalesTeamBins Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load SalesTeamBin Api Actions
 */
export const getSalesTeamBinSuccess = createAction(
  '[SalesTeamBin/API] get SalesTeamBin Detail Success',
  props<{ salesteambins: SalesTeamBin[] }>(),
);
export const getSalesTeamBinFailure = createAction(
  '[SalesTeamBin/API] Load SalesTeamBin Detail Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add SalesTeamBin Api Actions
 */
export const addSalesTeamBinSuccess = createAction(
  '[SalesTeamBin/API] Add SalesTeamBin Success',
  props<{ salesteambin: SalesTeamBin }>(),
);
export const addSalesTeamBinFailure = createAction(
  '[SalesTeamBin/API] Add SalesTeamBin Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove SalesTeamBin Api Actions
 */
export const deleteSalesTeamBinSuccess = createAction(
  '[SalesTeamBin/API] Delete SalesTeamBin Success',
  props<{ lineId: number }>(),
);
export const deleteSalesTeamBinFailure = createAction(
  '[SalesTeamBin/API] Delete SalesTeamBin Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update SalesTeamBin Api Actions
 */
export const updateSalesTeamBinSuccess = createAction(
  '[SalesTeamBin/API] Update SalesTeamBin Success',
);
export const updateSalesTeamBinFailure = createAction(
  '[SalesTeamBin/API] Update SalesTeamBin Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update SalesTeamBin Api Actions
 */
export const removeSalesTeamBinSuccess = createAction(
  '[SalesTeamBin/API] Remove SalesTeamBin Success',
);
export const removeSalesTeamBinFailure = createAction(
  '[SalesTeamBin/API] Remove SalesTeamBin Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Multiple SalesTeamBin Api Actions
 */
export const deleteMultipleSalesTeamBinSuccess = createAction(
  '[SalesTeamBin/API] Delete Multiple SalesTeamBin success',
  props<{ lineIds: number[] }>(),
);

export const deleteMultipleSalesTeamBinFailure = createAction(
  '[SalesTeamBin/API] Delete Multiple SalesTeamBin failure',
  props<{ errorSalesTeamBinMsg: any }>(),
);

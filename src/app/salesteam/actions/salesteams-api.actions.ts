import { createAction, props } from '@ngrx/store';
import { SalesTeam } from '@app/@core/data/salesteam';

/**
 * Load SalesTeams Api Actions
 */
export const loadSalesTeamsSuccess = createAction(
  '[SalesTeam/API] Load SalesTeams Success',
  props<{ salesteams: SalesTeam[] }>(),
);
export const loadSalesTeamsFailure = createAction(
  '[SalesTeam/API] Load SalesTeams Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load SalesTeams Api Actions
 */
export const getSalesTeamSuccess = createAction(
  '[SalesTeam/API] get SalesTeam Detail Success',
  props<{ salesteams: SalesTeam[] }>(),
);
export const getSalesTeamFailure = createAction(
  '[SalesTeam/API] Load SalesTeam Detail Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add SalesTeam Api Actions
 */
export const addSalesTeamSuccess = createAction(
  '[SalesTeam/API] Add SalesTeam Success',
  props<{ salesteam: SalesTeam }>(),
);
export const addSalesTeamFailure = createAction(
  '[SalesTeam/API] Add SalesTeam Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete SalesTeam Api Actions
 */
export const deleteSalesTeamSuccess = createAction(
  '[SalesTeam/API] Delete SalesTeam Success',
  props<{ salesTeamCode: string }>(),
);
export const deleteSalesTeamFailure = createAction(
  '[SalesTeam/API] Delete SalesTeam Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update SalesTeam Api Actions
 */
export const updateSalesTeamSuccess = createAction(
  '[SalesTeam/API] Update SalesTeam Success',
);
export const updateSalesTeamFailure = createAction(
  '[SalesTeam/API] Update SalesTeam Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update SalesTeam Api Actions
 */
export const removeSalesTeamSuccess = createAction(
  '[SalesTeam/API] Remove SalesTeam Success',
);
export const removeSalesTeamFailure = createAction(
  '[SalesTeam/API] Remove SalesTeam Failure',
  props<{ errorMsg: any }>(),
);

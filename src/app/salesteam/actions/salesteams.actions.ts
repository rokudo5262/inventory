import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { SalesTeam } from '@app/@core/data/salesteam';

export const loadSalesTeams = createAction(
  '[SalesTeam/API] Load SalesTeams',
  props<{ salesteams: SalesTeam[] }>(),
);
export const getSalesTeam = createAction(
  '[SalesTeam/API] get SalesTeam detail',
  props<{ salesteams: SalesTeam[] }>(),
);
export const addSalesTeam = createAction(
  '[SalesTeam/API] Add SalesTeam',
  props<{ salesteam: SalesTeam }>(),
);
export const updateSalesTeam = createAction(
  '[SalesTeam/API] Update SalesTeam',
  props<{ update: Update<SalesTeam> }>(),
);
export const deleteSalesTeam = createAction(
  '[SalesTeam/API] Delete SalesTeam',
  props<{ salesTeamCode: string }>(),
);
export const removeSalesTeam = createAction(
  '[SalesTeam/API] Remove SalesTeam',
  props<{ update: Update<SalesTeam> }>(),
);

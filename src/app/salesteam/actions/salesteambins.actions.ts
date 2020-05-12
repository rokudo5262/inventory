import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { SalesTeamBin } from '@app/@core/data/salesteambin';

export const loadSalesTeamBins = createAction(
  '[SalesTeamBin/API] Load SalesTeamBins',
  props<{ salesteambins: SalesTeamBin[] }>(),
);
export const getSalesTeamBin = createAction(
  '[SalesTeamBin/API] get SalesTeamBin detail',
  props<{ salesteambins: SalesTeamBin[] }>(),
);
export const addSalesTeamBin = createAction(
  '[SalesTeamBin/API] Add SalesTeamBin',
  props<{ salesteambin: SalesTeamBin }>(),
);
export const updateSalesTeamBin = createAction(
  '[SalesTeamBin/API] Update SalesTeamBin',
  props<{ update: Update<SalesTeamBin> }>(),
);
export const deleteSalesTeamBin = createAction(
  '[SalesTeamBin/API] Delete SalesTeamBin',
  props<{ lineId: number }>(),
);
export const searchSalesTeamBins = createAction(
  '[SalesTeamBin/API] Search SalesTeamBin',
  props<{ query: string }>(),
);
export const removeSalesTeamBin = createAction(
  '[SalesTeamBin/API] Remove SalesTeamBin',
  props<{ update: Update<SalesTeamBin> }>(),
);
export const deleteMultipleSalesTeamBin = createAction(
  '[SalesTeamBin/API] Delete Multiple SalesTeamBin',
  props<{ lineIds: number[] }>(),
);

import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { SalesTeamBin } from '@app/@core/data/salesteambin';

export interface SalesTeamBinState extends EntityState<SalesTeamBin> {
  selectedSalesTeamBinlineId: number | string | null;
}
export const salesteambinAdapter: EntityAdapter<SalesTeamBin> = createEntityAdapter<SalesTeamBin>({
  selectId: (salesteambin: SalesTeamBin) => salesteambin.lineId,
  sortComparer: null,
});

export const SalesTeamBinInitialState: SalesTeamBinState = salesteambinAdapter.getInitialState({
  selectedSalesTeamBinlineId: null,
  entities: {
    0: {

    },
  },
});

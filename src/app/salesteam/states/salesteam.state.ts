import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { SalesTeam } from '@app/@core/data/salesteam';

export interface SalesTeamState extends EntityState<SalesTeam> {
  selectedSalesTeamCode: number | string | null;
}

export const salesteamAdapter: EntityAdapter<SalesTeam> = createEntityAdapter<SalesTeam>({
  selectId: (salesteam: SalesTeam) => salesteam.salesTeamCode,
  sortComparer: null,
});

export const salesteamInitialState: SalesTeamState = salesteamAdapter.getInitialState({
  selectedSalesTeamCode: null,
  entities: {
    0: {
      salesTeamCode: '',
      salesTeamName: '',
      channelCode: '',
      channelName: '',
      comPanyCode: '',
      customerCode: '',
      status: '',
      remark: '',
      deleted: false,
    },
  },
});

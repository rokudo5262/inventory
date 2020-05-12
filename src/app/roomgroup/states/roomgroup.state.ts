import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { RoomGroup } from '@app/@core/data/roomgroup';

export interface RoomGroupState extends EntityState<RoomGroup> {
  selectedRoomGroupID: number | string | null;
}
export const roomgroupAdapter: EntityAdapter<RoomGroup> = createEntityAdapter<RoomGroup>({
  selectId: (roomgroup: RoomGroup) => roomgroup.id,
  sortComparer: null,
});

export const roomgroupInitialState: RoomGroupState = roomgroupAdapter.getInitialState({
  selectedRoomGroupID: null,
  entities: {
    0: {
      id: 0,
      bame: '',
      bote: '',
      status: '',
      deleted: false,
    },
  },
});

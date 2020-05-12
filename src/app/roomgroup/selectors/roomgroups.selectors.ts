import { createSelector } from '@ngrx/store';
import { RoomGroupReducer } from '../reducers';
import { roomgroupAdapter } from '../states/roomgroup.state';
import { selectRoomGroupsState } from './features.selectors';

export const selectRoomGroupEntitiesState = createSelector(
  selectRoomGroupsState,
  state => state[RoomGroupReducer.roomgroupsFeatureKey],
);

export const {
  selectIds: selectRoomGroupIds,
  selectEntities: selectRoomGroupEntities,
  selectAll: selectAllRoomGroups,
  selectTotal: selectTotalRoomGroups,
} = roomgroupAdapter.getSelectors(selectRoomGroupEntitiesState);

export const RoomGroupSelectors = {
  selectRoomGroupEntitiesState,
  selectRoomGroupIds,
  selectRoomGroupEntities,
  selectAllRoomGroups,
  selectTotalRoomGroups,
};
export const selectCurrentRoomGroup = (id) => createSelector(
  selectRoomGroupEntities,
  (roomgroup) => roomgroup[id]
);

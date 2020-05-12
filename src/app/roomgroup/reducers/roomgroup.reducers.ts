import { createReducer, on } from '@ngrx/store';
import { roomgroupInitialState, roomgroupAdapter } from '../states/roomgroup.state';
import { RoomGroupsActions, RoomGroupsApiActions } from '../actions';

export const roomgroupsFeatureKey = 'roomgroups';

export const reducer = createReducer(
    roomgroupInitialState,
    on(
        RoomGroupsActions.loadRoomGroups,
        RoomGroupsApiActions.loadRoomGroupsSuccess,
        (state, { roomgroups }) => {
            roomgroups = roomgroups.filter(x => x.deleted === false);
            return roomgroupAdapter.addMany(roomgroups, state);
        }
    ),
    on(
        RoomGroupsActions.getRoomGroup,
        RoomGroupsApiActions.getRoomGroupSuccess,
        (state, { roomgroups }) => {
            roomgroups = roomgroups.filter(x => x.deleted === false);
            return roomgroupAdapter.addMany(roomgroups, state);
        }
    ),
    on(
        RoomGroupsActions.addRoomGroup,
        RoomGroupsApiActions.addRoomGroupSuccess,
        (state, { roomgroup }) => roomgroupAdapter.addOne(roomgroup, state),
    ),
    on(
        RoomGroupsActions.updateRoomGroup,
        (state, { update }) => roomgroupAdapter.updateOne(update, state),
    ),
    on(
        RoomGroupsActions.removeRoomGroup,
        (state, { update }) => roomgroupAdapter.updateOne(update, state),
    ),
    on(
        RoomGroupsActions.deleteRoomGroup,
        RoomGroupsApiActions.deleteRoomGroupSuccess,
        (state, { id }) => roomgroupAdapter.removeOne(id, state),
    ),
);

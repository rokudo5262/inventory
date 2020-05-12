import { createAction, props } from '@ngrx/store';
import { RoomGroup } from '@app/@core/data/roomgroup';

/**
 * Load RoomGroups Api Actions
 */
export const loadRoomGroupsSuccess = createAction(
  '[RoomGroup/API] Load RoomGroups Success',
  props<{ roomgroups: RoomGroup[] }>(),
);
export const loadRoomGroupsFailure = createAction(
  '[RoomGroup/API] Load RoomGroups Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load RoomGroup Api Actions
 */
export const getRoomGroupSuccess = createAction(
  '[RoomGroup/API] get RoomGroup Detail Success',
  props<{ roomgroups: RoomGroup[] }>(),
);

export const getRoomGroupFailure = createAction(
  '[RoomGroup/API] Load RoomGroup Detail Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add RoomGroup Api Actions
 */
export const addRoomGroupSuccess = createAction(
  '[RoomGroup/API] Add RoomGroup Success',
  props<{ roomgroup: RoomGroup }>(),
);

export const addRoomGroupFailure = createAction(
  '[RoomGroup/API] Add RoomGroup Failure',
  props<{ errorMsg: any }>(),
);

/**
 * Remove RoomGroup Api Actions
 */
export const deleteRoomGroupSuccess = createAction(
  '[RoomGroup/API] Delete RoomGroup Success',
  props<{ id: number }>(),
);
export const deleteRoomGroupFailure = createAction(
  '[RoomGroup/API] Delete RoomGroup Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update RoomGroup Api Actions
 */
export const updateRoomGroupSuccess = createAction(
  '[RoomGroup/API] Update RoomGroup Success',
);
export const updateRoomGroupFailure = createAction(
  '[RoomGroup/API] Update RoomGroup Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update RoomGroup Api Actions
 */
export const removeRoomGroupSuccess = createAction(
  '[RoomGroup/API] Remove RoomGroup Success',
);
export const removeRoomGroupFailure = createAction(
  '[RoomGroup/API] Remove RoomGroup Failure',
  props<{ errorMsg: any }>(),
);


import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { RoomGroup } from '@app/@core/data/roomgroup';


export const loadRoomGroups = createAction(
  '[RoomGroup/API] Load RoomGroups',
  props<{ roomgroups: RoomGroup[] }>(),
);
export const getRoomGroup = createAction(
  '[RoomGroup/API] get RoomGroup Detail',
  props<{ roomgroups: RoomGroup[] }>(),
);
export const addRoomGroup = createAction(
  '[RoomGroup/API] Add RoomGroup',
  props<{ roomgroup: RoomGroup }>(),
);

export const updateRoomGroup = createAction(
  '[RoomGroup/API] Update RoomGroup',
  props<{ update: Update<RoomGroup> }>(),
);

export const deleteRoomGroup = createAction(
  '[RoomGroup/API] Delete RoomGroup',
  props<{ id: number }>(),
);
export const searchRoomGroups = createAction(
  '[RoomGroup/API] Search RoomGroup',
  props<{ query: string }>(),
);
export const removeRoomGroup = createAction(
  '[RoomGroup/API] Remove RoomGroup',
  props<{ update: Update<RoomGroup> }>(),
);

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { RoomGroupsActions } from '@app/roomgroup/actions';
import { RoomGroupSelectors } from '@app/roomgroup/selectors';

@Component({
  templateUrl: './roomgroup-detail.component.html',
})
export class RoomGroupDetailComponent implements OnInit {
  roomgroup$;
  id$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<RoomGroup>
  ) {
    this.id$ = +this.router.snapshot.params.id;
    this.roomgroup$ = this.store.pipe(select(RoomGroupSelectors.selectCurrentRoomGroup(this.id$)));
  }
  ngOnInit() {
    this.store.dispatch(RoomGroupsActions.getRoomGroup({ roomgroups: [] }));
  }
}

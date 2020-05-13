import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { SalesTeamSelectors } from '@app/salesteam/selectors';
import { SalesTeamsActions } from '@app/salesteam/actions';
import { SalesTeam } from '@app/@core/data/salesteam';

@Component({
  selector: 'ngx-salesteam-detail',
  templateUrl: './salesteam-detail.component.html',
  styleUrls: ['./salesteam-detail.component.scss'],
})
export class SalesTeamDetailComponent implements OnInit {
  salesteam$;
  salesTeamCode$: string;
  constructor(
    private router: ActivatedRoute,
    private store: Store<SalesTeam>
  ) {
    this.salesTeamCode$ = this.router.snapshot.params.salesTeamCode;
    this.salesteam$ = this.store.pipe(select(SalesTeamSelectors.selectCurrentSalesTeam(this.salesTeamCode$)));
  }
  ngOnInit() {
    this.store.dispatch(SalesTeamsActions.loadSalesTeams({ salesteams: [] }));
    }
}

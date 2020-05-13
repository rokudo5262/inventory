import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { SalesTeamBinSelectors } from '@app/salesteam/selectors';
import { SalesTeamBinsActions } from '@app/salesteam/actions';

@Component({
  selector: 'ngx-salesteambin-detail',
  templateUrl: './salesteambin-detail.component.html',
  styleUrls: ['./salesteambin-detail.component.scss'],
})
export class SalesTeamBinDetailComponent implements OnInit {
  salesteambin$;
  lineId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<SalesTeamBin>
  ) {
    this.lineId$ = this.router.snapshot.params.lineId;
    this.salesteambin$ = this.store.pipe(select(SalesTeamBinSelectors.selectCurrentSalesTeamBin(this.lineId$)));
  }
  ngOnInit() {
    this.store.dispatch(SalesTeamBinsActions.getSalesTeamBin({ salesteambins: [] }));
  }
}

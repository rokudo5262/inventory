import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoodsGroup } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { GoodsGroupSelectors } from '@app/goods-group/selectors';
import { GoodsGroupActions } from '@app/goods-group/actions';

@Component({
    selector: 'ngx-goods-group-detail',
    templateUrl: './goods-group-detail.component.html',
    styleUrls: ['./goods-group-detail.component.scss'],
})
export class GoodsGroupDetailComponent implements OnInit {
    goodsgroup$;
    id$: string;
    constructor(
        private router: ActivatedRoute,
        private store: Store<GoodsGroup>,
        private route: Router,
    ) {
        this.id$ = this.router.snapshot.params.id;
        this.goodsgroup$ = this.store.pipe(select(GoodsGroupSelectors.selectCurrentGoodsGroup(this.id$)));
        this.goodsgroup$.subscribe(g => console.log(g.length));
    }
    ngOnInit() {
        this.store.dispatch(GoodsGroupActions.getGoodsGroups({ goodsgroups: [] }));
    }
    navigateToGoodsGroup(event) {
        this.route.navigate(['dashboard/goods-group']);
      }
}

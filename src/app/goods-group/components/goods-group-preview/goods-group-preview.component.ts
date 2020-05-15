import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoodsGroup } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { GoodsGroupSelectors } from '@app/goods-group/selectors';

@Component({
    selector: 'ngx-goods-group-preview',
    templateUrl: './goods-group-preview.component.html',
    styleUrls: ['./goods-group-preview.component.scss'],
})
export class GoodsGroupPreviewComponent implements OnInit {
    @Input() goodsgroup: GoodsGroup;
    goodsgroup$;
    id$: string;
    constructor(
        private router: ActivatedRoute,
        private store: Store<GoodsGroup>,
        private route: Router,
    ) {
        this.id$ = this.router.snapshot.params.id;
        this.goodsgroup$ = this.store.pipe(select(GoodsGroupSelectors.selectCurrentGoodsGroup(this.id$)));
    }
    ngOnInit() {
    }
    navigateToGoodsGroup(event) {
        this.route.navigate(['dashboard/goods-group']);
      }
}

// import { OnInit, Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { GoodsGroup } from '@app/@core/data';
// import { Store, select } from '@ngrx/store';
// import { GoodsGroupSelectors } from '@app/goods-group/selectors';

// @Component({
//     selector: 'ngx-goods-group-detail',
// })
// export class GoodsGroupDetailComponent implements OnInit{
//     goodsgroup$;
//     id$: string;
//     constructor(
//         private router: ActivatedRoute,
//         private store: Store<GoodsGroup>
//     ){
//         this.id$ = this.router.snapshot.params.id;
//         this.goodsgroup$ = this.store.pipe(select(GoodsGroupSelectors.selectCurrentGoodsGroup(this.id$)));
//     }
//     ngOnInit(){}
// }

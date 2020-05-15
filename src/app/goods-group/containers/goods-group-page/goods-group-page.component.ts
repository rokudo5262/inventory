import { Component, OnInit } from '@angular/core';
import { GoodsGroup } from '@appdata';
import { NbDialogService } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoodsGroupSelectors } from '../../selectors';
import { GoodsGroupActions } from '../../actions';
import { Update } from '@ngrx/entity';
import { Router } from '@angular/router';
import { GoodsGroupAddComponent } from '../../components/goods-group-add/goods-group-add.component';

@Component({
  selector: 'ngx-goods-group-page',
  templateUrl: './goods-group-page.component.html',
  styleUrls: ['./goods-group-page.component.scss'],
})
export class GoodsGroupPageComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    mode: 'external',
    actions: {
      add: false,
      delete: true,
      edit: true,
    },
    edit: {
        editButtonContent: '<i class="nb-compose"></i>',
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'id',
        type: 'number',
        editable: false,
      },
      code: {
        title: 'Code',
        type: 'string',
        editable: true,
      },
      name: {
        title: 'Name',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        type: 'string',
        editable: true,
      },
    },
  };
  goodsgroups$: Observable<GoodsGroup[]>;
  constructor(
    private store: Store<GoodsGroup>,
    private dialogService: NbDialogService,
    private route: Router,
  ) {
    this.goodsgroups$ = this.store.pipe(select(GoodsGroupSelectors.selectAllGoodsGroup));
    this.goodsgroups$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(GoodsGroupActions.getGoodsGroups({ goodsgroups: [] }));
  }
  open() {
    this.dialogService.open(GoodsGroupAddComponent);
  }

  edit(event) {
    const changes = event.newData;
    const update: Update<GoodsGroup> = {
      id: event.data.id,
      changes: changes
    };
    this.store.dispatch(GoodsGroupActions.updateGoodsGroup({ update: update }));
    event.confirm.resolve();
  }

  navigateToDetail(event) {
    this.route.navigate(['dashboard/goods-group/goods-group', event.data.id]);
  }

  delete(event) {
    if (window.confirm('Are you sure you want to delete?' + event.data.code + '' + event.data.name + '?')) {
      this.store.dispatch(GoodsGroupActions.removeGoodsGroup({ id: event.data.id }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { CodeMaster } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { CodeMasterSelectors } from '@app/code-master/selectors/code-master.selectors';
import { CodeMasterApiActions } from '@app/code-master/actions';

@Component({
  selector: 'button-view',
  template: `
    <button nbButton status="success" (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(
    private store: Store<CodeMaster>,
  ) {
    this.codeMasters$ = this.store.pipe(select(CodeMasterSelectors.selectAllCodeMasters));

  }
  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  // onClick() {
  //   this.save.emit(this.rowData);
  // }
  codeMasters$: Observable<CodeMaster[]>;
  data: Array<CodeMaster>;
  update: Update<CodeMaster> = {
    id: null,
    changes: null
  };
  onClick(event) {
    if (window.confirm('Are you sure you want to edit ' + event.data.cMName + '?')) {
      // const changes = event.newData;
      // const update: Update<CodeMaster> = {
      //   id: event.data.id,
      //   changes: changes
      // };
      this.store.dispatch(CodeMasterApiActions.updateDelete({ id: event.id }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

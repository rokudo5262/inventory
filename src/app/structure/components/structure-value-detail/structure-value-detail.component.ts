import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { StructureValue } from '@app/@core/data/structure-value';
import { StructureValueSelectors } from '@app/structure/selectors';
import { StructureValuesActions } from '@app/structure/actions';


@Component({
  selector: 'ngx-structure-value-detail',
  templateUrl: './structure-value-detail.component.html',
  styleUrls: ['./structure-value-detail.component.scss'],
})

export class StructureValueDetailComponent implements OnInit {
  structurevalue$;
  id$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<StructureValue>
  ) {
    this.id$ = +this.router.snapshot.params.id;
    this.structurevalue$ = this.store.pipe(select(StructureValueSelectors.selectCurrentStructureValue(this.id$)));
  }

  ngOnInit() {
    this.store.dispatch(StructureValuesActions.getStructureValues({ structurevalues: [] }));
  }
}

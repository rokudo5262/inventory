import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { StructureValue } from '@app/@core/data/structure-value';
import { StructureValueSelectors } from '@app/structure/selector';
import { StructureValueApiActions } from '@app/structure/actions';


@Component({
  templateUrl: './structure-value-detail.componet.html',
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
    this.store.dispatch(StructureValueApiActions.getStructureValues({ structurevalues: [] }));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Structure } from '@app/@core/data/structure';
import { StructureSelectors } from '@app/structure/selector/structure.selectors';
import { StructureApiActions } from '@app/structure/actions';

@Component({
  templateUrl: './structure-detail.component.html',
})

export class StructureDetailComponent implements OnInit {
  structure$;
  id$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<Structure>,
  ) {
    this.id$ = +this.router.snapshot.params.id;
    this.structure$ = this.store.pipe(select(StructureSelectors.selectCurrentStructure(this.id$)));
  }
  ngOnInit() {
    this.store.dispatch(StructureApiActions.getStructures({ structures: [] }));
  }
}

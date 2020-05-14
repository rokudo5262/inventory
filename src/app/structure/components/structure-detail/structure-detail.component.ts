import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Structure } from '@app/@core/data/structure';
import { StructureSelectors } from '@app/structure/selectors/structure.selectors';
import { StructuresActions } from '@app/structure/actions';

@Component({
  selector: 'ngx-structure-detail',
  templateUrl: './structure-detail.component.html',
  styleUrls: ['./structure-detail.component.scss'],
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
    this.store.dispatch(StructuresActions.getStructures({ structures: [] }));
  }
}


import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { CreateFormComponent } from './create-form/create-form.component';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  id: string;
  name: string;
  phone: number;
  currentLiabilities: number;
  totalPrice: number;
  totalMinusReturns: number;
}

@Component({
  selector: 'ngx-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],

})
export class SuppliersComponent {


  customColumn = 'id';
  defaultColumns = ['name', 'phone', 'currentLiabilities', 'totalPrice', 'totalMinusReturns'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { id: '012', name: 'Vnmilk', phone: 1234567890,
      currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456},
      children: [
        { data: { id: '012', name: 'Vnmilk', phone: 1234567890,
        currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456}},
        { data: { id: '012', name: 'Vnmilk', phone: 1234567890,
        currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456 }},
      ],
    },
    {
      data: { id: '013', name: 'Vnmilk', phone: 1234567890,
      currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456},
      children: [
        { data: { id: '012', name: 'Vnmilk', phone: 1234567890,
        currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456}},
        { data: { id: '012', name: 'Vnmilk', phone: 1234567890,
        currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456}},
      ],
    },
    {
      data: { id: '014', name: 'Vnmilk', phone: 1234567890,
      currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456},
      children: [
        { data: { id: '012', name: 'Vnmilk', phone: 1234567890,
        currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456}},
        { data: { id: '012', name: 'Vnmilk', phone: 1234567890,
        currentLiabilities: 234, totalPrice: 123, totalMinusReturns: 456}},
      ],
    },

  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}
// @Component({
//   selector: 'ngx-fs-icon',
//   template: `
//     <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
//     </nb-tree-grid-row-toggle>
//     <ng-template #fileIcon>
//       <nb-icon icon="file-text-outline"></nb-icon>
//     </ng-template>
//   `,
// })
// export class FsIconComponent {
//   @Input() kind: string;
//   @Input() expanded: boolean;

//   isDir(): boolean {
//     return this.kind === 'dir';
//   }
// }
@Component({
  selector: 'ngx-create',
  templateUrl: 'suppliers.component.html',
  styleUrls: ['suppliers.component.scss'],

})
export class CreateComponent {
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(private windowService: NbWindowService) { }

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Window content from template',
        context: {
          text: 'some text to pass into template',
        },
      },
    );
  }

  openCreateForm() {
    this.windowService.open(CreateFormComponent, { title: `Create New Supplier` });
  }
}

interface History<T2> {
  data: T2;
  children?: History<T2>[];
  expanded?: boolean;
}

interface HEntry {
  id: string;
  time: string;
  creator: string;
  total: number;
}

@Component({
  selector: 'ngx-tab2',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
})
export class Tab2Component {
  customColumn2 = 'id';
  defaultColumns2 = ['time', 'creator', 'total'];
  allColumns2 = [this.customColumn2, ...this.defaultColumns2];

  dataSource2: NbTreeGridDataSource<HEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<HEntry>) {
    this.dataSource2 = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: History<HEntry>[] = [
    {
      data: { id: '012', time: 'Feb 18', creator: 'Huong', total: 123 },
      children: [
        { data: { id: '021', time: 'Feb 18', creator: 'Huong', total: 123 }},
        { data: { id: '022', time: 'Feb 18', creator: 'Huong', total: 123 }},
      ],
    },
    {
      data: { id: '013', time: 'Feb 18', creator: 'Tuan', total: 123 },
      children: [
        { data: { id: '021', time: 'Feb 18', creator: 'Huong', total: 123 }},
        { data: { id: '022', time: 'Feb 18', creator: 'Huong', total: 123 }},
      ],
    },
    {
      data: { id: '014', time: 'Feb 18', creator: 'Tuan', total: 123 },
      children: [
        { data: { id: '021', time: 'Feb 18', creator: 'Huong', total: 123 }},
        { data: { id: '022', time: 'Feb 18', creator: 'Huong', total: 123 }},
      ],
    },

  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}




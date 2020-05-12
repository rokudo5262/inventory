import { OnInit, Component, Input } from '@angular/core';
import { ProductGroup } from '@app/@core/data';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styles: [`
    @include nb-install-component() {
      input {
        width: 100%;
        margin-bottom: 20px;
      }
    }
    button[nbButton]{
      display: block;
      float: right;
      margin-left: 15px;
    }
  `],
})
export class ProductComponent implements OnInit {
  @Input() productdetail: ProductGroup;
  constructor(
    private router: Router,
  ) { }
  ngOnInit() { }

  navigateToProductGroup() {
    this.router.navigate(['dashboard/product-group']);
  }
}

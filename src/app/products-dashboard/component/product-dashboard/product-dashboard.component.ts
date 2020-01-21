import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, OnDestroy {

  public urlParams: string;
  public router$: Subscription;
  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
   this.router$ = this.router.params.subscribe((params: Params) => {
      this.urlParams = params.search;
  });
}
ngOnDestroy(): void {
  this.router$.unsubscribe();
}

}

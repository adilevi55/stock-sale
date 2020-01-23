import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    constructor(
        private router: ActivatedRoute,
        private route: Router
    ) { }
    ngOnInit(): void {
        // this.router.params.subscribe((params: Params) => {
        //     console.log(this.router.snapshot.params);
        //     console.log(this.router.snapshot);
        //     console.log(params);
        // });
 }
}


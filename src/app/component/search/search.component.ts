import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';
import{MatPaginator }from '@angular/material/paginator';
import { ApiService } from '../../api.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class Search {
  constructor(public api: ApiService) {}
  @ViewChild('paginator', { static: false }) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'brand',
    'category',
    'description',
    'price',
  ];
  searchtext:any;
  products:any;
  dataSource = new MatTableDataSource<any[]>;
  length:any

  onClickSubmit(form: NgForm) {
    // console.log(this.searchtext);
    console.log(form.value);
    this.api.getProduct(form.value.product).subscribe((res) => {
      this.products = res.products;
      this.dataSource=new MatTableDataSource(this.products)
      this.length=this.products.length;
      this.dataSource.paginator=this.paginator
    });
  }
}

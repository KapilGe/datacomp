import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
// import { viewdetail } from './component/viewdetail/viewdetail.component';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // standalone: true,
  // imports: [MatTableModule, MatSortModule],
  // styleUrls: ['./app.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('paginator', { static: false }) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'brand',
    'category',
    'description',
    'price',
    'action',
  ];
  users: any;
  user!: number;
  useredit: any;
  dataSource = new MatTableDataSource<any[]>;
  length!: number;
  constructor(
    private api: ApiService,
    private router: Router,
    private _liveAnnouncer: LiveAnnouncer
  ) {}
  @ViewChild('sort', { static: false })sort!: MatSort

  ngAfterViewInit() {
    console.log(this.paginator);
    // console.log(this.sort);
    this.api.get().subscribe((res:any) => {
      this.users = res.products;
      this.dataSource = new MatTableDataSource(this.users);
      this.length = this.users.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort
      

      console.log(
        'data response',
        this.length,
        this.sort,
        this.paginator
      );
      // return this.users;
    });
  }
  // ngAfterViewInit() {
  // }
  // sortChange(sortState: Sort) {
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction} ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

  removeObjectWithId(arr:any, id:number) {
    const objWithIdIndex = arr.findIndex((obj:any) => obj.id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }

    return arr;
  }
  userDetail(u:any) {
    console.log(u);
    if (u !== undefined) {
      // this.user = u;
      this.router.navigate([`products/${u}`]);
    }
  }
  editdetail(us:any) {
    console.log(us);
    if (us !== undefined) {
      // this.useredit = us;
      this.router.navigate([`products/edit/${us}`]);
    }
  }

//   deleteUser(id) {
//     console.log(id);
//     this.removeObjectWithId(this.users, id);
//   }
}

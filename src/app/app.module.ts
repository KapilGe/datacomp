import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import {MatButtonModule,MatIconModule,MatSortModule,MatPaginatorModule,MatToolbarModule,MatTableModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { editdetail } from './component/editdetail/editdetail.component';
import { viewdetail } from './component/viewdetail/viewdetail.component';
import { Search } from './component/search/search.component';

const routes: Routes = [
  { path: 'products', component: HomeComponent },
  { path: 'products/:id', component: viewdetail },
  { path: 'products/edit/:id', component: editdetail },
  { path: 'search', component: Search },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    editdetail,
    viewdetail,
    Search
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports:[HomeComponent,editdetail,viewdetail,Search]
})
export class AppModule { }

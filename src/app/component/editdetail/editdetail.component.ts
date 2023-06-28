import { Component } from '@angular/core';

import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'editdetail',
  templateUrl: './editdetail.component.html',
})
export class editdetail {
  constructor(private apiservice: ApiService, private route: ActivatedRoute) {}
  @Input() edit!:number;
  public num:any;
  detail:any;
  ngOnInit() {
    this.num = this.route.snapshot.paramMap.get('id');
    this.apiservice.getUserById(this.num).subscribe((res) => {
      console.log(res);
      this.detail = res;
    });
  }
  onClickSubmit(form: NgForm) {
    console.log(form.value, 1);
    this.apiservice.patchById(form.value.id, form.value).subscribe((res) => {
      console.log(res);
    });
  }
}

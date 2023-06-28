import { OnInit } from '@angular/core';

import {
  Component,
  Input,
  OnChanges,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
@Component({
  selector: 'viewdetail',
  templateUrl: './viewdetail.component.html',
})
export class viewdetail {
  @Input() info!: number;
  public num:any;
  detail:any;

  constructor(
    private apiservice: ApiService,
    public cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.num = this.route.snapshot.paramMap.get('id');
    console.log(this.num);
    if (this.num !== undefined) {
      this.apiservice.getUserById(this.num).subscribe((res) => {
        console.log(res);
        this.detail = res;
        this.cd.detectChanges();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  limit: number;
  orderby: any;
  isDesc: any;
  accountData: any[];
  totalCollCount: number;
  constructor(private service: DashboardService) {
    this.limit = 0;
    this.accountData = [];
    this.totalCollCount = this.service.getTotalDataItems();
    this.loadMore();
  }

  ngOnInit() {
    console.log('account data : ', this.accountData);
  }

  sortby(prop) {
    if (this.orderby !== prop){
      this.isDesc = false;
    }

    this.isDesc = !this.isDesc;
    this.orderby = prop;
    const direction = this.isDesc ? 1 : -1;
    this.accountData.sort(function (a, b) {
      const val1 = Number(a[prop]);
      const val2 = Number(b[prop]);
      if (val1 < val2) {
        return -1 * direction;
      } else if (val1 > val2) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

    loadMore() {
      this.accountData = this.accountData.concat(this.service.getMSData());
      this.limit += 3;
      if (this.orderby) {
        this.isDesc = !this.isDesc;
        this.sortby(this.orderby);
      }
    }
}

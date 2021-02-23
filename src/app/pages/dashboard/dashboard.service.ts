import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  private totalCollCount: number;
  private dataSample: any[];
  constructor() {
    this.dataSample = [{
      accountId: '5200',
      name: 'IRA - 5200',
      code: 'USD',
      cash: '5763.33',
      currentValue: {
        percent: '-0.08',
        amount: '8916.69'
      }
    },
    {
      accountId: '1812',
      name: 'AAA - 1812',
      code: 'USD',
      cash: '2010926.10',
      currentValue: {
        percent: '0.21',
        amount: '38881.63'
      }
    },
    {
      accountId: '3810',
      name: 'AAA - 3810',
      code: 'USD',
      cash: '10050054.07',
      currentValue: {
        percent: '0.07',
        amount: '8916.69'
      }
    },//
    {
      accountId: '52001',
      name: 'CVD - 52001',
      code: 'USD',
      cash: '15763.33',
      currentValue: {
        percent: '0.18',
        amount: '9567.34'
      }
    },
    {
      accountId: '7812',
      name: 'XTY - 764',
      code: 'USD',
      cash: '424.24',
      currentValue: {
        percent: '0.20',
        amount: '3455.18'
      }
    },
    {
      accountId: '3424',
      name: 'UHC - 3424',
      code: 'USD',
      cash: '234243.07',
      currentValue: {
        percent: '0.07',
        amount: '896768.16'
      }
    },
    {
      accountId: '4242',
      name: 'NBG - 4242',
      code: 'USD',
      cash: '5763.33',
      currentValue: {
        percent: '-0.08',
        amount: '8916.43'
      }
    },
    {
      accountId: '6756',
      name: 'UYT - 6756',
      code: 'USD',
      cash: '11243.23',
      currentValue: {
        percent: '0.20',
        amount: '38916.10'
      }
    },
    {
      accountId: '6464',
      name: 'RSE - 6464',
      code: 'USD',
      cash: '10050054.07',
      currentValue: {
        percent: '0.07',
        amount: '5456.34'
      }
    }
    ];
    this.totalCollCount = this.dataSample.length;
  }

  getTotalDataItems() {
    return this.totalCollCount;
  }

  getMSData() {
    return this.dataSample.splice(0, 3);
  }
}

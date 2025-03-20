import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  rangeVal = 0
  bill = 0 || ''
  billVal = ''

  onIonChange = (e:RangeCustomEvent) => {
    this.rangeVal = Number(e.detail.value)
  }

  closeBill = () => { 
    this.billVal = `Valor da conta: R$${Number(this.bill) + Number(this.bill) * this.rangeVal / 100}`
  }

}

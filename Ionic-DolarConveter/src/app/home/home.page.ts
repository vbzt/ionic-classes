import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }
  real: number | string = ''
  valDonation: number | string = ''
  dolar: number = 5.71

  convert = () => {
    const valDonation = Number(this.valDonation)

    Number(this.real = valDonation * this.dolar)
  }
}

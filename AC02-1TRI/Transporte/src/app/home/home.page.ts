import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  km: number = 0
  entry: string = ''
  output: string = ''
  rideVal: number = 0
  appFee: number = 0.25
  alertButtons = ['OK'];


  constructor() {}
  calculate = () => {
    if(this.entry.length === 0){
      this.output = 'Selecione todos os campos antes de finalizar a corrida'
      return
    }

    if(this.entry === 'vip') this.rideVal = 10 + (this.km * 5.5)
    if(this.entry === 'superior') this.rideVal = 7.5 + (this.km * 3.5)
    if(this.entry === 'normal') this.rideVal = 5 + (this.km * 2.5)
    
    if(this.rideVal >= 150) this.appFee = 0.20
    this.output = `Motorista: R$${ this.rideVal * ( 1 - this.appFee ) } App: R$${ this.rideVal * this.appFee }` 
  }
}
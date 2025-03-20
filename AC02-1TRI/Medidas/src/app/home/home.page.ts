import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  value: number = 0;
  entry: string = '';
  output: string = '';
  converted: string  = '0';

  constructor() {}

  conversionKeys: { [key: string]: number } = {
    'km-mi': 0.62,
    'km-ft': 3280.84,
    'km-in': 39370.1,
    'm-mi': 0.0006,
    'm-ft': 3.28,
    'm-in': 39.37,
    'cm-mi': 0.000006,
    'cm-ft': 0.032,
    'cm-in': 0.393,
  }

  convert = () => {
    const key = `${this.entry}-${this.output}`
    if(!this.conversionKeys[key]) return
    const value = this.value * this.conversionKeys[key]
    this.converted = `valor convertido de ${this.value}${this.entry} para ${value.toFixed(6)}${this.output}`
  }
}
import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}

  opcaoSelecionada: string = ''
  temp: number | string = ''
  converted:string = ''

  convert = () => {
    
    const temperature = Number(this.temp)
    if (this.opcaoSelecionada == 'fahrenheit') {
      this.converted = `${(temperature * 9/5) + 32 }°F`
    }    
    if (this.opcaoSelecionada == 'celsius') {
      this.converted = `${(temperature - 32) * 5/9}°C`
    }
  }
}
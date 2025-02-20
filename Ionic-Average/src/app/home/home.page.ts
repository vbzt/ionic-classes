import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}

  nota1: number | string = ''
  nota2: number | string = ''
  nota3: number | string = ''
  nota4: number | string = ''
  output:string = ''

  average = () => { 
    const average = (Number(this.nota1) + Number(this.nota2) + Number(this.nota3) + Number(this.nota4)) / 4
    if(average < 3) this.output = 'Retido'
    if (3 <= average && average < 6) this.output = 'Recuperação'
    if(average >= 6) this.output = 'Aprovado'
  }
 
}
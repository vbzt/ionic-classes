import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}

  a: number | string = ''
  b: number | string = ''
  c: number | string = ''
  output:string = ''

  check = () => { 
    const a = Number(this.a)
    const b = Number(this.b)
    const c = Number(this.c)
    if(a + b > c && b + c > a && a + c > b){    
      if(a === b && a === c){
        this.output = 'triangulo equilatero'
        return
      }
      if(a === b || b === c || a === c) {
        this.output = 'triangulo isósceles'
        return
      }
      if(a !== b && a !== c){
        this.output = 'triangulo escaleno'
        return
      }
    }else{ 
      this.output = 'nao é triangulo'
    }
  }
 
}
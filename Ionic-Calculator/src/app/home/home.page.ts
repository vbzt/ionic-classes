import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  n1: number | string = ''
  n2: number | string = ''
  res: number | string = ''
  operation: string = ''

  calculate = () => {
    if (!this.operation || !this.n1 || !this.n2) {
      this.res = 'Please fill in all fields'
      return
    }
    
    switch (this.operation) {
      case '+':
        this.res = this.calc(this.n1, this.n2, '+')
        break
      case '-':
        this.res = this.calc(this.n1, this.n2, '-')
        break
      case '*':
        this.res = this.calc(this.n1, this.n2, '*')
        break
      case '/':
        this.res = this.calc(this.n1, this.n2, '/')
        break
      default:
        this.res = 'Invalid operation'
    }
  }

  calc = (a: number | string, b: number | string, operation: string): number | string => {
    const num1 = typeof a === 'string' ? parseFloat(a) : a
    const num2 = typeof b === 'string' ? parseFloat(b) : b

    if (isNaN(num1) || isNaN(num2)) return 'Invalid input'

    switch (operation) {
      case '+': return num1 + num2
      case '-': return num1 - num2
      case '*': return num1 * num2
      case '/': return num2 !== 0 ? num1 / num2 : 'Division by 0'
      default: return 'Invalid operation'
    }
  }
}

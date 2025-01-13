import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.scss']
})
export class EdgeComponent  {


constructor(public _residentCalc: CalcService){}

residents = this._residentCalc.installDay()



  resultAge?: string|number 
  otvet = ""
  messages = [
    "Дней: ",
    "Невозможно прожить дальше текущего дня",
    "green",
    "red"
  ];
  postComment = "штук.";
classColor =""
  calkEdge(dateEntered: string) {
    if (dateEntered) {
      const date = new Date().getTime()
      let dr = new Date(dateEntered+'T00:00:01').getTime()
      const result = Math.trunc((date - dr) / 86400 / 1000)
      if (result > 0) {
        this.resultAge = result.toString()
        this.otvet = this.messages[0]
        this.resultAge = String(result)
        this.classColor = this.messages[2]
      } else {
        this.otvet = this.messages[1]
        this.classColor = "red"

        this.resultAge = ""
      }
    }
  }
}

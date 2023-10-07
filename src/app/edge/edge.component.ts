import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';
import { Residents } from '../interfaces/residents';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.scss']
})
export class EdgeComponent  {


constructor(public _residentCalc: CalcService){}

residents = this._residentCalc.installDay()



  resultEdge = "";
  otvet = ""
  messages = [
    "Результат в днях: ",
    "Невозможно прожить дальше текущего дня",
    "green",
    "red"
  ];
  postComment = "штук.";
classColor =""
  calkEdge(dateEntered: string) {
    if (dateEntered) {
      const date = new Date().getTime()
      let dr = new Date(dateEntered).getTime()
      const res = Math.trunc((date - dr) / 86400 / 1000)
      if (res > 0) {
        this.resultEdge = res.toLocaleString()
        this.otvet = this.messages[0]
        this.resultEdge = String(res)
        this.classColor = this.messages[2]
      } else {
        this.otvet = this.messages[1]
        this.classColor = "red"

        this.resultEdge = "!"
      }
    }
  }
}

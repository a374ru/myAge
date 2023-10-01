import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.scss']
})
export class EdgeComponent {

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
  calkEdge(rrr: string) {
    if (rrr) {
      const date = new Date().getTime()
      let dr = new Date(rrr).getTime()
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

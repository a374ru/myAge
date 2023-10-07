import { Injectable } from '@angular/core';
import { Residents } from '../interfaces/residents';

@Injectable({
  providedIn: 'root'
})

/**
  Сервис получает список лиц.
  Из списка получает дату рождения.
  Вычисляет кол-во дней от даты рождения до текущего момента.
  Возвращает новый список с количеством прошедших дней.

 */
export class CalcService {

  resident = [
    {
      fnm: "Олег",
      lnm: "Бородкин",
      dateOfBirth: "1973,09,07",
      day: 0
    },
    {
      fnm: "Елена",
      lnm: "Рягузова",
      dateOfBirth: "1974,09,24",
      day: 0
    },
    {
      fnm: "Василиса",
      lnm: "Рягузова",
      dateOfBirth: "2004,4,15",
      day: 0
    },
  ]

  person = [<Residents>{}];

  constructor() {
    // Входят данные с днюхой из сервиса конектора 

  }


  installDay() {

    for (const iterator of this.resident) {

      let theMoment = new Date().getTime()
      let a = iterator.dateOfBirth
      let b = new Date(a).getTime()
      let c = (theMoment - b) / 86400 / 1000
      iterator.day = Math.floor(c)

      this.person.push(iterator)
    }

    return this.person
  }



}

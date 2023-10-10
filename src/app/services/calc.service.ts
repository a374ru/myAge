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

  residents = [
    {
      fnm: "Олег",
      lnm: "Бородкин",
      dateOfBirth: "1973-09-07",
      day: 0
    },
    {
      fnm: "Клавдия",
      lnm: "Новикова",
      dateOfBirth: "1925-10-22",
      day: 0
    },
    {
      fnm: "Александр",
      lnm: "Бабаев",
      dateOfBirth: "1928-11-07",
      day: 0
    },
    {
      fnm: "Нина",
      lnm: "Бабаева",
      dateOfBirth: "1929-02-02",
      day: 0
    },
    {
      fnm: "Наталья",
      lnm: "Залыженко",
      dateOfBirth: "1950-01-11",
      day: 0
    },
    {
      fnm: "Николай",
      lnm: "Залыженко",
      dateOfBirth: "1953-04-22",
      day: 0
    },
    {
      fnm: "Кирилл",
      lnm: "Залыженко",
      dateOfBirth: "1976-09-20",
      day: 0
    },
    {
      fnm: "Михаил",
      lnm: "Новиков",
      dateOfBirth: "1945-06-06",
      day: 0
    },
    {
      fnm: "Александр",
      lnm: "Новиков",
      dateOfBirth: "1950-05-03",
      day: 0
    },
    {
      fnm: "Нина",
      lnm: "Новикова",
      dateOfBirth: "1952-05-16",
      day: 0
    },
    {
      fnm: "Татьяна",
      lnm: "Новикова",
      dateOfBirth: "1985-06-13",
      day: 0
    },
    {
      fnm: "Елена",
      lnm: "Рягузова",
      dateOfBirth: "1974-09-24",
      day: 0
    },
    {
      fnm: "Василиса",
      lnm: "Рягузова",
      dateOfBirth: "2004-04-15",
      day: 0
    },
    {
      fnm: "Екатерина",
      lnm: "Яхина (Рягузова)",
      dateOfBirth: "1995-01-07",
      day: 0
    },
    {
      fnm: "Мария",
      lnm: "Яхина",
      dateOfBirth: "2020-07-23",
      day: 0
    },
    {
      fnm: "Максим",
      lnm: "Яхин",
      dateOfBirth: "2022-09-02",
      day: 0
    },
  ]

  person = [<Residents>{}];

  constructor() {
    // Входят данные с днюхой из сервиса конектора 

  }


  installDay() {

    let theMoment = new Date().getTime();

    for (const item of this.residents) {
      let a = item.dateOfBirth+'T00:00:01';
      let bb = new Date(a)
      let b = new Date(a).getTime();
      let c = (theMoment - b) / 86400 / 1000;
      item.day = Math.floor(c);

      this.person.push(item);
      console.log(bb, item.fnm);
      
    }

    return this.person
  }



}

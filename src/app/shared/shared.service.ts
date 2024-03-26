import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private quizDataSubject = new BehaviorSubject<any>(null);
  quizData$ = this.quizDataSubject.asObservable();

  constructor() { }

  setQuizData(data: any) {
    this.quizDataSubject.next(data);
  }
}

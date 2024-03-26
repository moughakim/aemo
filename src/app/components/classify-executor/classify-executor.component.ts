import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-classify-executor',
  templateUrl: './classify-executor.component.html',
  styleUrl: './classify-executor.component.scss'
})
export class ClassifyExecutorComponent implements OnInit{
  quizData: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.quizData$.subscribe(data => {
      this.quizData = data;
      // Do whatever you need with the received quiz data
    });
  }
}

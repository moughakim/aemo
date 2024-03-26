import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-creator-form',
  templateUrl: './creator-form.component.html',
  styleUrl: './creator-form.component.scss'
})

export class CreatorFormComponent implements OnInit{
  quizForm!: FormGroup;
  questionTypes = [
    { value: 'select images', label: 'select images' },
    { value: 'calssify texts', label: 'calssify texts' },
    { value: 'select texts', label: 'select texts' }
  ];
  optionsArray!: FormArray<any>;
  
  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService
    ) { }

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      topic: ['', Validators.required],
      subject: ['', Validators.required],
      course: ['', Validators.required],
      questionDescription: ['', Validators.required],
      questionType: ['', Validators.required],
      options: this.fb.array(['text 1'], Validators.required)
    });

    this.optionsArray = this.quizForm.get('options') as FormArray;

    this.quizForm.valueChanges.subscribe(data => {
      this.sharedService.setQuizData(data);
    });
  }

  addOption() {
    const options = this.quizForm.get('options') as FormArray;
    options.push(this.fb.control(''));
  }

  removeOption(index: number) {
    const options = this.quizForm.get('options') as FormArray;
    options.removeAt(index);
  }

  submitQuiz() {
    if (this.quizForm.valid) {
      // Implement submission logic
      console.log(this.quizForm.value);
      this.executeQuizForm(this.quizForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

  executeQuizForm(quizData: any) {
    this.sharedService.setQuizData(quizData);
  }

}

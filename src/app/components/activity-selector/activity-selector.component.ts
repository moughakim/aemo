import { Component } from '@angular/core';

interface ActivityType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-activity-selector',
  templateUrl: './activity-selector.component.html',
  styleUrl: './activity-selector.component.scss'
})



export class ActivitySelectorComponent {


  selectedType!: string;

  activityTypes: ActivityType[] = [
    {value: 'ordering-01', viewValue: 'Ordering'},
    {value: 'matching-02', viewValue: 'Matching'}
  ];
}

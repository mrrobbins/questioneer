import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-surveys',
  templateUrl: 'surveys.component.html',
  styleUrls: ['surveys.component.css'],
  directives: []
})
export class SurveysComponent implements OnInit {

  private surveys = surveys;

  constructor(private router:Router) {}

  ngOnInit() {
  }

  navigateSurvey() {
    this.router.navigate(['/survey', 'who-we-are']);
  }

}

interface Survey {
  name: string,
  author: string,
  questions: string[]
}

const surveys:Survey[] = [{
  name: 'Who We Are',
  author: 'Matt Robbins',
  questions: [
    'What big events were happening in the world the year you were born? Who was president?',
    'What are your three favorite childhood memories?'
  ]
}];

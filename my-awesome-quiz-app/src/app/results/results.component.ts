import { Component, Input } from '@angular/core';
import { Answers, Question } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent {
  @Input() answers: Answers;
  @Input() questions: Question;

  answersCheck(incorrectNum: number) {
    console.log(this.answers)
   if (incorrectNum === 0) {
     return 'Wow WHAT A SUPERSTAR! You are truly a trivia master!';
   }
   if (incorrectNum <= 1) {
     return 'Great job! Thats like a B- performance!';
   }
   if (incorrectNum <= 2) {
     return 'Ehh.. Not too bad but also, Maybe try harder?';
   }
   if (incorrectNum >= 4)
     return 'You should probably stick to your day job!!';
   }
}

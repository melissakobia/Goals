import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Quote } from '../quote-class/quote'
import { from } from 'rxjs';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[];
  alertService: AlertService;
  quote: Quote;

  constructor
    (goalService: GoalService,
      alertService: AlertService,
      private http : HttpClient

  ) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  // completeGoal(isComplete, index) {
  //   if (isComplete) {
  //     this.goals.splice(index,1)
  //   }
  // }

  deleteGoal(isComplete, index) {

    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)


      if (toDelete) {
        this.goals.splice(index, 1)
        this.alertService.alertMe("This goal has been deleted");
      }

    }

  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal);
  }





  ngOnInit() {
    interface APIResponse {
      author:string;
      quote:string;
    }

    this.http.get <APIResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      //Successful API request
      this.quote = new Quote(data.author, data.quote)}, err=>{
        this.quote = new Quote("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
  }

}

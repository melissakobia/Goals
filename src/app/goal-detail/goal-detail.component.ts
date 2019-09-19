import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal; //=>goal is the property that will undergo input property binding of type Goal of blueprint class
  @Output() isComplete = new EventEmitter<boolean>(); //Passes the event to parent component i.e goal.component

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }



  constructor() { }

  ngOnInit() {
  }

}

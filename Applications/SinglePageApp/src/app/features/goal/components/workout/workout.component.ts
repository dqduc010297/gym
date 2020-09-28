import { Component, OnInit, Input } from '@angular/core';
import { WorkOut } from '../../models/exercise';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  @Input() workOuts: WorkOut[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

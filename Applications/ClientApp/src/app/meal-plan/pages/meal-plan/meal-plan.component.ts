import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {
  isInitPage = true;
  selectedUserId = -1;

  constructor(
    public loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectedUser(event: number) {
    console.log(event);
    this.isInitPage = false;
    this.selectedUserId = event;
  }

}

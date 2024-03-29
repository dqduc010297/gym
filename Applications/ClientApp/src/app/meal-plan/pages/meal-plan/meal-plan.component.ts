import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';
import { Role } from 'src/app/core/const/role';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {
  isInitPage = true;
  selectedUserId = -1;
  currentRole: string;
  subTitle = 'Chọn người dùng để tạo hoặc chỉnh sửa meal plan';
  constructor(
    public loaderService: LoaderService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (!this.authService.isClaimValid('canCreateOrEditMealPlan')) {
      this.subTitle = 'Bạn chưa có meal plan';
      this.selectedUserId = this.authService._loginUser._id;
    }
  }

  selectedUser(event: number) {
    this.isInitPage = false;
    this.selectedUserId = event;
  }

}

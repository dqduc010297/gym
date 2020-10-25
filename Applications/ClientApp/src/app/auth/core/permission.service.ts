import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private canCreateOrEditMealPlan: boolean;
  private canCreateMealPlan: boolean;

  parsePermission(permission: any) {
    this.canCreateOrEditMealPlan = permission.canCreateOrEditMealPlan ?? false;
    this.canCreateMealPlan = permission.canCreateMealPlan;
  }

  _canCreateOrEditMealPlan() {
    return this.canCreateOrEditMealPlan;
  }

  _canCreateMealPlan() {
    return this.canCreateMealPlan;
  }

}

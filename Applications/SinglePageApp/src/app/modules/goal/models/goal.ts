import { WorkOut } from './exercise';
import { Nutrition } from './nutrition';

export class Goal {
  goalOverview: GoalOverview;
  startDateImage: string;
  endDateImage: string;
  workOuts: WorkOut[] = [];
  nutritions: Nutrition[] = [];
}

export class GoalOverview {
  id: number;
  isSuccessful: boolean;
  isFinished: boolean;
  description: string;
  startDate: Date;
  endDate: Date;
}

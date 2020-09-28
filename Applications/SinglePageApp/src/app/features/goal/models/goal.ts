import { WorkOut } from './exercise';
import { Nutrition } from './nutrition';

export class GoalOverview {
  id: number;
  isSuccessful: boolean;
  isFinished: boolean;
  description: string;
  startDate: Date;
  endDate: Date;
}

export class Goal extends GoalOverview {
  startDateImage: string;
  endDateImage: string;
  inbodyGoal: InBodyGoal = new InBodyGoal();
  workOuts: WorkOut[] = [];
  nutritions: Nutrition[] = [];
}

export class InBodyGoal {
  weight: InBodyGoalItem = new InBodyGoalItem();
  smm: InBodyGoalItem = new InBodyGoalItem();
  bfm: InBodyGoalItem = new InBodyGoalItem();
}

export class InBodyGoalItem {
  isDecreased: boolean;
  expected: number;
  start: number;
  result: number;
}

export class Exercise {
  name: string;
  set: number;
  rep: number;
  restTime: number;
  remarks: string;

  constructor() { }
}

export class WorkOut {
  date: Date;
  exercises: Exercise[] = [];
}

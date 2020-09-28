import { IMock } from './imock';
import { Observable, of } from 'rxjs';
import { GoalOverview, Goal } from '../modules/goal/models/goal';
import { Injectable } from '@angular/core';
import { Nutrition } from '../modules/goal/models/nutrition';
import { WorkOut } from '../modules/goal/models/exercise';
import * as moment from 'moment';

@Injectable()
export class GoalMock implements IMock {
  doMock(param?: any): Observable<any> {
    const data: Goal[] = [
      {
        id: 1,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 1.5,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 1,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 2,
            result: 30.8
          }
        },
      },
      {
        id: 2,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 90,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 35.8,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 31.0,
            result: 30.8
          }
        },
      },
      {
        id: 3,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 90,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 35.8,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 31.0,
            result: 30.8
          }
        },
      },
      {
        id: 4,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 90,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 35.8,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 31.0,
            result: 30.8
          }
        },
      },
      {
        id: 5,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: true,
        isFinished: true,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 90,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 35.8,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 31.0,
            result: 30.8
          }
        },
      },
      {
        id: 6,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: true,
        isFinished: true,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 90,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 35.8,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 31.0,
            result: 30.8
          }
        },
      },
      {
        id: 7,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: true,
        isFinished: true,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 90,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 35.8,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 31.0,
            result: 30.8
          }
        },
      },
      {
        id: 8,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: false,
        endDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        startDateImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        nutritions: this.generateNutritions(new Date('03/04/2020'), new Date('03/11/2020')),
        workOuts: this.generateWorkOuts(new Date('03/04/2020'), new Date('03/11/2020')),
        inbodyGoal: {
          weight: {
            isDecreased: true,
            start: 91.8,
            expected: 90,
            result: 89.9,
          },
          smm: {
            isDecreased: false,
            start: 34.5,
            expected: 35.8,
            result: 35.5
          },
          bfm: {
            isDecreased: true,
            start: 32.0,
            expected: 31.0,
            result: 30.8
          }
        },
      },
    ];
    const result = data.filter(p => p.id === param)[0];
    return of(result);
  }

  private generateNutritions(startDate: Date, endDate: Date): Nutrition[] {
    const diff = ((endDate as any) - (startDate as any)) / 86400000;
    const nutritions: Nutrition[] = [];
    for (let i = 0; i < diff; i++) {
      nutritions.push({
        date: new Date(moment(startDate).add(i, 'days').format('L')),
        breakfast: 'assets/images/nutritions/pho.jpg',
        lunch: 'assets/images/nutritions/lunch.jpg',
        dinner: 'assets/images/nutritions/dinner.jpg',
        extra1: 'assets/images/nutritions/guava.jpg',
        extra2: 'assets/images/nutritions/banana.jpg'
      });
    }
    return nutritions;
  }

  private generateWorkOuts(startDate: Date, endDate: Date): WorkOut[] {
    const diff = ((endDate as any) - (startDate as any)) / 86400000;
    const workOuts: WorkOut[] = [];
    for (let i = 0; i < diff; i++) {
      workOuts.push({
        date: new Date(moment(startDate).add(i, 'days').format('L')),
        exercises: [
          {
            name: 'Plank',
            set: 4,
            rep: 12,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Moutain Climber',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Flyingjacks',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Jumping Jacks',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Burpees',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
        ]
      });
    }
    return workOuts;
  }
}

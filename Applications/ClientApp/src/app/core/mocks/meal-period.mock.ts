// import { IMock } from './imock';
// import { Observable, of } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { MealPlanPeriod } from 'src/app/meal-plan/core/models/meal-plan-period.model';
// import { MealTitle } from 'src/app/meal-plan/core/models/meal.model';
// import { DeviceDetectorService } from 'ngx-device-detector';

// @Injectable({ providedIn: 'root' })
// export class MealPeriodMock implements IMock {
//     constructor(
//         private deviceDetectorService: DeviceDetectorService
//     ) {

//     }
//     doMock(param?: any): Observable<MealPlanPeriod[]> {
//         const data: MealPlanPeriod[] = [
//             {
//                 id: 1,
//                 index: 1,
//                 title: 'Giai đoạn 1',
//                 isLock: false,
//                 isActivate: true,
//                 start: new Date('03/04/2020'),
//                 end: new Date('03/11/2020'),
//                 calo: 1500,
//                 target: 'Tăng cơ giảm mỡ',
//                 proteinPercent: 50,
//                 carbPercent: 20,
//                 fatPercent: 30,
//                 notes: [
//                     '- Không ăn các loại có sử dụng đường trong bánh kẹo',
//                     '- Không sử dụng các loại thực phẩm chiên, rán bằng dầu',
//                     '- Sử dụng dầu oliu hoặc dầu dừa để chế biến',
//                     '- Tất cả các thực phẩm khi chế biến nên chế để đảm bảo dinh dưỡng',
//                     '- Không sử dụng quá nhiều các loại gia vị không cần thiết',
//                 ],
//                 breakfast: {
//                     title: MealTitle.Breakfast,
//                     menu: [
//                         '- Bún, phở, cơm, bánh các loại',
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Nếu ăn ở ngoài ăn 50% lượng tinh bột, hạn chế nước dùng. Uống nước trước khi ăn',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 lunch: {
//                     title: MealTitle.Lunch,
//                     menu: [
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 150g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 beforeWorkout: {
//                     title: MealTitle.BeforeWorkout,
//                     menu: [
//                         '- 1 hộp sữa chua + 2 quả trứng + 1 phô mai',
//                         '- 1 bịch sữa tươi + 2 quả trứng + 1 phô mai',
//                     ],
//                     notes: [
//                         '- Nên ăn bữa này trước khi tập luyện dể có năng lượng',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 dinner: {
//                     title: MealTitle.Dinner,
//                     menu: [
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 extra: {
//                     title: MealTitle.Extra,
//                     menu: [],
//                     notes: [],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//             },
//             {
//                 id: 2,
//                 index: 2,
//                 title: 'Giai đoạn 2',
//                 isLock: false,
//                 isActivate: false,
//                 start: new Date('03/04/2020'),
//                 end: new Date('03/11/2020'),
//                 calo: 1500,
//                 target: 'Tăng cơ giảm mỡ',
//                 proteinPercent: 50,
//                 carbPercent: 20,
//                 fatPercent: 30,
//                 notes: [
//                     '- Không ăn các loại có sử dụng đường trong bánh kẹo',
//                     '- Không sử dụng các loại thực phẩm chiên, rán bằng dầu',
//                     '- Sử dụng dầu oliu hoặc dầu dừa để chế biến',
//                     '- Tất cả các thực phẩm khi chế biến nên chế để đảm bảo dinh dưỡng',
//                     '- Không sử dụng quá nhiều các loại gia vị không cần thiết',
//                 ],
//                 breakfast: {
//                     title: MealTitle.Breakfast,
//                     menu: [
//                         '- Bún, phở, cơm, bánh các loại',
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Nếu ăn ở ngoài ăn 50% lượng tinh bột, hạn chế nước dùng. Uống nước trước khi ăn',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 lunch: {
//                     title: MealTitle.Lunch,
//                     menu: [
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 150g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 beforeWorkout: {
//                     title: MealTitle.BeforeWorkout,
//                     menu: [
//                         '- 1 hộp sữa chua + 2 quả trứng + 1 phô mai',
//                         '- 1 bịch sữa tươi + 2 quả trứng + 1 phô mai',
//                     ],
//                     notes: [
//                         '- Nên ăn bữa này trước khi tập luyện dể có năng lượng',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 dinner: {
//                     title: MealTitle.Dinner,
//                     menu: [
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 extra: {
//                     title: MealTitle.Extra,
//                     menu: [],
//                     notes: [],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//             },
//             {
//                 id: 3,
//                 index: 3,
//                 title: 'Giai đoạn 3',
//                 isLock: false,
//                 isActivate: false,
//                 start: new Date('03/04/2020'),
//                 end: new Date('03/11/2020'),
//                 calo: 1500,
//                 target: 'Tăng cơ giảm mỡ',
//                 proteinPercent: 50,
//                 carbPercent: 20,
//                 fatPercent: 30,
//                 notes: [
//                     '- Không ăn các loại có sử dụng đường trong bánh kẹo',
//                     '- Không sử dụng các loại thực phẩm chiên, rán bằng dầu',
//                     '- Sử dụng dầu oliu hoặc dầu dừa để chế biến',
//                     '- Tất cả các thực phẩm khi chế biến nên chế để đảm bảo dinh dưỡng',
//                     '- Không sử dụng quá nhiều các loại gia vị không cần thiết',
//                 ],
//                 breakfast: {
//                     title: MealTitle.Breakfast,
//                     menu: [
//                         '- Bún, phở, cơm, bánh các loại',
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Nếu ăn ở ngoài ăn 50% lượng tinh bột, hạn chế nước dùng. Uống nước trước khi ăn',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 lunch: {
//                     title: MealTitle.Lunch,
//                     menu: [
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 150g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 beforeWorkout: {
//                     title: MealTitle.BeforeWorkout,
//                     menu: [
//                         '- 1 hộp sữa chua + 2 quả trứng + 1 phô mai',
//                         '- 1 bịch sữa tươi + 2 quả trứng + 1 phô mai',
//                     ],
//                     notes: [
//                         '- Nên ăn bữa này trước khi tập luyện dể có năng lượng',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 dinner: {
//                     title: MealTitle.Dinner,
//                     menu: [
//                         '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
//                     ],
//                     notes: [
//                         '- Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
//                     ],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//                 extra: {
//                     title: MealTitle.Extra,
//                     menu: [],
//                     notes: [],
//                     calo: 350,
//                     isActive: this.deviceDetectorService.isDesktop(),
//                 },
//             },
//         ];
//         return of(data);
//     }
// }

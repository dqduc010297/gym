import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-meal-plan-detail',
  templateUrl: './meal-plan-detail.component.html',
  styleUrls: ['./meal-plan-detail.component.scss']
})
export class MealPlanDetailComponent implements OnInit {
  panels = [
    {
      active: this.deviceDetectorService.isDesktop(),
      disabled: false,
      name: 'Breakfast - Bữa sáng',
      options: [
        '- Bún, phở, cơm, bánh các loại',
        '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
      ],
      note: 'Nếu ăn ở ngoài ăn 50% lượng tinh bột, hạn chế nước dùng. Uống nước trước khi ăn',
      calo: 350,
    },
    {
      active: this.deviceDetectorService.isDesktop(),
      disabled: false,
      name: 'Lunch - Bữa trưa',
      options: [
        '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 150g Thịt các loại (ưu tiên thịt cá, gà)',
      ],
      note: 'Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
      calo: 350,
    },
    {
      active: this.deviceDetectorService.isDesktop(),
      disabled: false,
      name: 'Before workout - Trước tập',
      options: [
        '- 1 hộp sữa chua + 2 quả trứng + 1 phô mai',
        '- 1 bịch sữa tươi + 2 quả trứng + 1 phô mai',
      ],
      note: 'Nên ăn bữa này trước khi tập luyện dể có năng lượng',
      calo: 350,
    },
    {
      active: this.deviceDetectorService.isDesktop(),
      disabled: false,
      name: 'Dinner - Tối',
      options: [
        '- 150g tinh bột(khoai, cơm, gạo lứt,...) + 100g Thịt các loại (ưu tiên thịt cá, gà)',
      ],
      note: 'Bổ sung thêm rau xanh, hạn chế đồ ăn chiên xào. Canh lượng dầu ăn bằng muỗng cafe',
      calo: 350,
    },
  ];
  constructor(
    private deviceDetectorService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
  }

}

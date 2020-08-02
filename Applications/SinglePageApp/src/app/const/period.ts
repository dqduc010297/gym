import { SelectItem } from '../models/core/select-item';

export const enum PartPeriod { Year, Month, Quarter, Week, }

export const enum QuarterPeriod { Quarter1, Quarter2, Quarter3, Quarter4, }

export const enum MonthPeriod {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

export const enum DayPeriod { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, }

export const YearPeriods: SelectItem[] = [
    { value: 0, label: 'Tất cả', disable: false },
    { value: 2020, label: '2020', disable: false },
    { value: 2019, label: '2019', disable: false },
];

export const PartPeriods: SelectItem[] = [
    { value: PartPeriod.Year, label: 'Năm', disable: false },
    { value: PartPeriod.Quarter, label: 'Quý', disable: false },
    { value: PartPeriod.Month, label: 'Tháng', disable: false },
    { value: PartPeriod.Week, label: 'Tuần', disable: false },
];

export const QuarterPeriods: SelectItem[] = [
    { value: QuarterPeriod.Quarter1, label: 'Quý 1', disable: false },
    { value: QuarterPeriod.Quarter2, label: 'Quý 2', disable: false },
    { value: QuarterPeriod.Quarter3, label: 'Quý 3', disable: false },
    { value: QuarterPeriod.Quarter4, label: 'Quý 4', disable: false },
];

export const MonthPeriods: SelectItem[] = [
    { value: MonthPeriod.January, label: 'Tháng 1', disable: false },
    { value: MonthPeriod.February, label: 'Tháng 2', disable: false },
    { value: MonthPeriod.March, label: 'Tháng 3', disable: false },
    { value: MonthPeriod.April, label: 'Tháng 4', disable: false },
    { value: MonthPeriod.May, label: 'Tháng 5', disable: false },
    { value: MonthPeriod.June, label: 'Tháng 6', disable: false },
    { value: MonthPeriod.July, label: 'Tháng 7', disable: false },
    { value: MonthPeriod.August, label: 'Tháng 8', disable: false },
    { value: MonthPeriod.September, label: 'Tháng 9', disable: false },
    { value: MonthPeriod.October, label: 'Tháng 10', disable: false },
    { value: MonthPeriod.November, label: 'Tháng 11', disable: false },
    { value: MonthPeriod.December, label: 'Tháng 12', disable: false },
];

export const DayPeriods: SelectItem[] = [
    { value: DayPeriod.Monday, label: 'Thứ 2', disable: false },
    { value: DayPeriod.Tuesday, label: 'Thứ 3', disable: false },
    { value: DayPeriod.Wednesday, label: 'Thứ 4', disable: false },
    { value: DayPeriod.Thursday, label: 'Thứ 5', disable: false },
    { value: DayPeriod.Friday, label: 'Thứ 6', disable: false },
    { value: DayPeriod.Saturday, label: 'Thứ 7', disable: false },
    { value: DayPeriod.Sunday, label: 'Chủ nhật', disable: false },
];

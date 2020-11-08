export enum Role {
  PERSONAL_TRAINER,
  MEMBER,
  MASTER,
  MANAGER,
  SYS_ADMIN = 'SYS_ADMIN',
}

export const RoleOptions = [
  { label: 'Huấn luyện viên', value: 'PERSONAL_TRAINER' },
  { label: 'Khách hàng', value: 'MEMBER' },
  { label: 'Master', value: 'MASTER' },
  { label: 'Quản lý', value: 'MANAGER' },
  { label: 'SYS_ADMIN', value: 'SYS_ADMIN' },
  { label: 'Tiếp tân', value: 'RECEPTION' },
];

export const scheduleMap: Record<string, string> = {
  M: '9:00 - 5:00',
  T: '9:00 - 4:30',
  W: '9:00 - 3:00',
  R: '9:00 - 3:30',
  F: '9:00 - 5:00'
};

export interface Video {
  name: string; roles: string[];
}

export interface View {
  age: number;
  region: string;
  date: string;
}

export const Employees = [
  {
    name: 'Cynthia Cunningham',
    roles: ['moderator', 'infrastructure', 'firmware']
  },
  {
    name: 'Peter Clark',
    roles: ['contingency', 'protocol'] },
  {
    name: 'Theresa Soto',
    roles: ['implementation'] },
  {
    name: 'Russell Fisher',
    roles: ['implementation', 'application']
  },
  {
    name: 'Elizabeth Hudson',
    roles: ['instruction set design'] },
  {
    name: 'Heather Spencer',
    roles: ['moderator'] },
  {
    name: 'Barbara Tran',
    roles: ['protocol'] },
  {
    name: 'Julia Anderson',
    roles: ['instruction set design', 'implementation']
  }
];

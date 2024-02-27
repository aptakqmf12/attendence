export type Attendance =
  | { label: '본인'; code: 'MYSELF' }
  | { label: '불참'; code: 'ABSENCE' }
  | { label: '대리인'; code: 'AGENT' }
  | { label: '미정'; code: 'UNDETERMINED' };

export interface User {
  id: string;
  name: string;
  birth: string; // ex) 20240101
  phone: string; // ex) 01012345678
  createdAt: string; // ex) 2024-01-01T13:01:45,
  attendance: Attendance;
}

export interface Attendee {
  id: string;
  name: string;
  birth: string;
  phone: string;
  createdAt: string;
  attendance: Attendance;
}

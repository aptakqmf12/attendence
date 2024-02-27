import axios from 'axios';
type LoginRequest = {
  id: string;
  password: string;
};

type LoginResponse = {
  result: {
    token: string;
  };
};

const anonymous = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
  },
});

export const requestLogin = async (req: LoginRequest) => {
  return await anonymous.post<LoginResponse>('/login', req);
};

export const getProfile = async () => {
  return await client.get('profile');
};

export const getAttendee = async (attendeeId: number) => {
  return await client.get(`attendees/${attendeeId}`);
};

export const getAttendeeList = async () => {
  return await client.get('attendees');
};

export const updateAttendee = async (attendeeId: string, code: string) => {
  return await client.post(`/attendees/${attendeeId}`, { code });
};

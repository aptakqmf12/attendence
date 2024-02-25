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

const client = axios.create({
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
  },
});
export const requestLogin = async (req: LoginRequest) => {
  return await axios.post<LoginResponse>('/login', req);
};

export const getProfile = async () => {
  return await client.get('/api/profile');
};

export const getAttendee = async (attendeeId: string) => {
  return await client.get(`/api/attendees/${attendeeId}`);
};

export const getAttendeeList = async () => {
  return await client.get('/api/attendees');
};

export const updateAttendee = async (attendeeId: string, code: string) => {
  return await client.post(
    `/attendees/${attendeeId}`,
    { code },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

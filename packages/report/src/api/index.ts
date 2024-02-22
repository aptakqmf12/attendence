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
export const requestLogin = async (req: LoginRequest) => {
  return await axios.post<LoginResponse>('/login', req);
};

export const getProfile = async () => {
  return await axios.get('/profile');
};

export const getAttendee = async () => {
  return await axios.get('/attendee:attendeeId');
};

export const getAttendeeList = async () => {
  return await axios.get('/attendees');
};

export const updateAttendee = async () => {
  return await axios.post(
    '/attendee:attendeeId',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

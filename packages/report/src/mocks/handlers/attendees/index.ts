import {
  DefaultBodyType,
  http,
  HttpHandler,
  HttpResponse,
  PathParams,
} from 'msw';
import { Response } from '../login';

const mock_attendees: Attendee[] = [
  {
    id: '1',
    name: '이동주',
    birth: '19630312',
    phone: '01052732287',
    createdAt: '2023.01.12T13:10:00',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '2',
    name: '손미나',
    birth: '19950210',
    phone: '01063591109',
    createdAt: '2023.01.12T13:10:00',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '3',
    name: '권용태',
    birth: '19611130',
    phone: '01078540112',
    createdAt: '2023.01.12T13:10:00',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '4',
    name: '송대일',
    birth: '19850412',
    phone: '01018494456',
    createdAt: '2023.02.20T10:21:30',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '5',
    name: '문만수',
    birth: '19580316',
    phone: '01068457789',
    createdAt: '2023.02.20T10:21:30',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '6',
    name: '장진철',
    birth: '19680123',
    phone: '01023591154',
    createdAt: '2023.02.20T10:21:30',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '7',
    name: '송시웅',
    birth: '19760309',
    phone: '01099513451',
    createdAt: '2023.02.20T10:21:30',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '8',
    name: '송형진',
    birth: '19890518',
    phone: '01056561298',
    createdAt: '2023.04.01T12:37:28',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '9',
    name: '정도훈',
    birth: '19920728',
    phone: '01022460075',
    createdAt: '2023.04.01T12:37:28',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '10',
    name: '낭궁원미',
    birth: '20000423',
    phone: '01045661028',
    createdAt: '2023.04.01T12:37:28',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '11',
    name: '서은성',
    birth: '19810221',
    phone: '01029471925',
    createdAt: '2023.04.01T12:37:28',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '12',
    name: '예윤혁',
    birth: '19621206',
    phone: '01032929981',
    createdAt: '2023.04.01T12:37:28',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '13',
    name: '김효성',
    birth: '19760101',
    phone: '01068781025',
    createdAt: '2023.08.06T17:26:12',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '14',
    name: '설범석',
    birth: '19991021',
    phone: '01097681123',
    createdAt: '2023.08.06T17:26:12',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
  {
    id: '15',
    name: '제갈효진',
    birth: '19840611',
    phone: '01023427677',
    createdAt: '2023.08.06T17:26:12',
    attendance: {
      label: '미정',
      code: 'UNDETERMINED',
    },
  },
];

const mock_attendance = Object.freeze({
  ['MYSELF']: '본인',
  ['AGENT']: '대리인',
  ['ABSENCE']: '불참',
  ['UNDETERMINED']: '미정',
});

type Attendance = {
  label: '본인' | '대리인' | '불참' | '미정';
  code: 'MYSELF' | 'AGENT' | 'ABSENCE' | 'UNDETERMINED';
};

type Attendee = {
  id: string;
  name: string;
  birth: string;
  phone: string;
  createdAt: string;
  attendance: Attendance;
};

const handlers: HttpHandler[] = [
  http.get<
    { attendeeId: string },
    DefaultBodyType,
    Response<Attendee>,
    '/attendees/:attendeeId'
  >('/attendees/:attendeeId', ({ params, request }) => {
    const token = request.headers.get('Authorization');

    if (!token) {
      return HttpResponse.json(
        { message: '로그인 후 이용해주세요.' },
        { status: 401 },
      );
    }

    const { attendeeId } = params;

    const data = mock_attendees.find((attend) => attend.id === attendeeId);

    if (data) return HttpResponse.json({ result: data });

    return HttpResponse.json(
      { message: '해당 선거인 정보를 찾을 수 없습니다.' },
      {
        status: 404,
      },
    );
  }),
  http.get<PathParams<never>, DefaultBodyType, Response<Attendee[]>>(
    '/attendees',
    async ({ request }) => {
      const token = request.headers.get('Authorization');

      if (!token) {
        return HttpResponse.json(
          { message: '로그인 후 이용해주세요.' },
          { status: 401 },
        );
      }

      return HttpResponse.json({ result: mock_attendees });
    },
  ),

  http.post<
    { attendeeId: string },
    { code: Attendance['code'] },
    Response<undefined>,
    '/attendees/:attendeeId'
  >('/attendees/:attendeeId', async ({ request, params }) => {
    const token = request.headers.get('Authorization');

    if (!token) {
      return HttpResponse.json(
        { message: '로그인 후 이용해주세요.' },
        { status: 401 },
      );
    }

    const { attendeeId } = params;
    const { code } = await request.json();

    const index = mock_attendees.findIndex(
      (attend) => attend.id === attendeeId,
    );

    if (index < 0)
      return HttpResponse.json(
        { message: '해당 선거인 정보를 찾을 수 없습니다.' },
        {
          status: 404,
        },
      );

    mock_attendees[index].attendance = {
      code,
      label: mock_attendance[code],
    };

    return HttpResponse.json({ message: '변경이 완료되었습니다.' });
  }),
];

export default handlers;

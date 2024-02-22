import { http, HttpHandler, HttpResponse, PathParams } from 'msw';

export const mock_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlam1jLWZlLXN1YmplY3Qtc2FtcGxlIiwibmFtZSI6Iuq5gOuvuOyYgSIsImlhdCI6MTUxNjIzOTAyMn0.DN8F24rLphbtb1asRGmPP8sndQox8pnU0Oa-iVyK8wE';

const mock_user = {
  id: 'akdh12349763',
  password: '9763^&',
  name: '김미영',
};

type UserInfo = {
  id: string;
  name: string;
};

export type Response<T> = {
  message?: string;
  result?: T;
};

const handlers: HttpHandler[] = [
  http.post<
    PathParams<never>,
    { id: string; password: string },
    Response<{ token: string }>
  >('/login', async ({ request }) => {
    const { id, password } = await request.json();

    if (mock_user.id === id && mock_user.password === password)
      return HttpResponse.json({
        result: { token: mock_token },
      });

    return HttpResponse.json(
      { message: '아이디나 비밀번호가 틀렸습니다.' },
      {
        status: 401,
      },
    );
  }),
  http.get<PathParams<never>, undefined, Response<UserInfo>>(
    '/profile',
    ({ request }) => {
      const token = request.headers.get('Authorization');

      if (token)
        return HttpResponse.json({
          result: { id: mock_user.id, name: mock_user.name },
        });

      return HttpResponse.json(
        { message: '로그인 후 이용해주세요.' },
        { status: 401 },
      );
    },
  ),
];

export default handlers;

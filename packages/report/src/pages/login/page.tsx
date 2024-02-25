import { useState, FormEvent, ChangeEvent } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Button from '@wooriga/common/src/components/Mui/inputs/Button';
import TextField from '@wooriga/common/src/components/Mui/inputs/TextField';

import { requestLogin } from '../../api/index';
import { useUserStore } from '../../store/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [idValid, setIdValid] = useState<undefined | boolean>();
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState<undefined | boolean>();

  const { setIsLogin, setSession } = useUserStore();

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
    setIdValid(e.currentTarget.value !== '');
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setPasswordValid(e.currentTarget.value !== '');
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id === '') setIdValid(false);
    if (password === '') setPasswordValid(false);
    if (id === '' || password === '') return;

    try {
      const res = await requestLogin({
        id: id,
        password: password,
      });

      localStorage.setItem('access_token', res.data.result.token);
      alert('로그인 성공');
      setIsLogin(true);

      navigate('/');
    } catch (error) {
      console.error(error);

      alert('로그인 실패');
    } finally {
      setIdValid(undefined);
      setPasswordValid(undefined);
    }
  };

  return (
    <Container maxWidth="xl">
      <Box width={552}>
        <Typography fontSize={40} fontWeight={700} sx={{ color: '#3F76DF' }}>
          로그인
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            component={'section'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <TextField
              placeholder="아이디 입력"
              fullWidth
              value={id}
              onChange={handleIdChange}
              helperText={idValid === false ? '아이디를 입력해주세요' : ''}
            />

            <TextField
              placeholder="비밀번호 입력"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              type="password"
              helperText={
                passwordValid === false ? '비밀번호를 입력해주세요' : ''
              }
            />

            <Button type="submit" fullWidth>
              로그인
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;

import { FormEvent } from 'react';
import {
  Container,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
} from '@mui/material';
import { requestLogin } from '../../api/index';

const Login = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await requestLogin({
        id: 'akdh12349763',
        password: '9763^&',
      });

      localStorage.setItem('access_token', res.data.result.token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container maxWidth="xl" sx={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">fwfwfw</FormHelperText>

          <Button type="submit">제출</Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Login;

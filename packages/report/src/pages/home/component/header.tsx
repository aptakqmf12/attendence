import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { getProfile } from '../../../api/index';
import { useUserStore } from '../../../store/user';
import { Button } from '@wooriga/common/src/components';
import Container from '@mui/material/Container';

interface InfoType {
  id: string;
  name: string;
}

export default function Header() {
  const { setSession, setIsLogin } = useUserStore();
  const [info, setInfo] = useState<InfoType>();

  const handleDestroySession = () => {
    setIsLogin(false);
    setSession(null);
    localStorage.removeItem('access_token');
  };

  useEffect(() => {
    getProfile().then((res) => {
      setInfo(res.data.result);
    });
  }, []);
  return (
    <StyledHeader>
      <Container
        maxWidth="xl"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>
          <Link to={'/'}>EJM COMPANY</Link>
        </h1>

        <div className="user_info">
          <span className="user_info_name">{info?.name}</span>
          <span className="user_info_id">{info?.id}</span>
          <Button
            variant="outlined"
            size="small"
            onClick={handleDestroySession}
          >
            로그아웃
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #fff;
  margin: 0 auto;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #777;
  }

  .user_info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    &_id {
      color: #7e7e7e;
    }
  }
`;

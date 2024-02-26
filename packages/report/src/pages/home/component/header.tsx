import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProfile } from '../../../api/index';
import { useUserStore } from '../../../store/user';

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
      <h1>EJM COMPANY</h1>

      <div>
        <span>{info?.name}</span>
        <span>{info?.id}</span>
        <button onClick={handleDestroySession}>로그아웃</button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #777;
  }
`;

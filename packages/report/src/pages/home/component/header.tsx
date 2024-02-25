import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>EJM COMPANY</h1>

      <div>
        <span>김미영</span>
        <span>fqfwqqfw</span>
        <button>로그아웃</button>
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

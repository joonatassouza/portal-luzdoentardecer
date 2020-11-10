import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #188091;
  padding: 0;
  width: 100%;

  button {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Pages = styled.strong`
  font-size: 20px;
  color: #f3f3f3;
`;

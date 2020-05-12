import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #188091;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  button {
    background: transparent;
    border: none;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Title = styled.strong`
  font-size: 20px;
  color: #f3f3f3;
`;

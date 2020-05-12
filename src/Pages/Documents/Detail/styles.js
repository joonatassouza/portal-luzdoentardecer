import styled from 'styled-components';

export const Container = styled.div`
  background: #606060;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 50px;
`;

export const PdfWrapper = styled.div`
  height: calc(768px * 1.6 + 40px);
  width: 768px;
`;

export const TopContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 285px;
  width: 100%;

  div {
    height: 100%;
    width: 55%;
    background: #188091;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    position: relative;

    h1 {
      font-size: 42px;
      font-weight: normal;
    }

    h5 {
      font-size: 20px;
      font-weight: normal;
    }

    a {
      position: absolute;
      left: 50px;
      bottom: 30px;
      background: transparent;
      border: none;
      color: #fff;
      display: flex;
      align-items: flex-start;
      transition: opacity 300ms ease;

      &:hover {
        opacity: 0.7;
      }

      img {
        width: 20px;
        margin-right: 10px;
      }

      span {
        font-size: 14px;
      }
    }
  }

  img {
    height: 100%;
    width: calc(45% - 5px);
    object-fit: cover;
    object-position: top right;
  }
`;

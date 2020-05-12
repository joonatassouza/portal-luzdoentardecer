import styled from 'styled-components';

export const Container = styled.div``;

export const Body = styled.div`
  width: 100%;
  max-width: 475px;
  margin: auto;
  padding: 0 50px;
  color: #636363;

  div {
    display: flex;
    width: 100%;
    margin: 30px auto;
    justify-content: center;
    font-size: 22px;
    text-align: center;

    button {
      margin-left: 5px;
      width: auto;
      height: auto;
      background: none;
      border: none;
      font-size: 22px;
      color: #636363;
      font-weight: bold;
      transition: opacity 300ms ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  > button {
    background: #3b589d;
    color: #fff;
    font-size: 26px;
    width: 100%;
    height: 52px;
    border-radius: 18px;
    border: none;
  }

  section {
    position: relative;
    width: 100%;

    span {
      background: #fff;
      padding: 0 10px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #636363;
      top: 8px;
      left: 0;
      z-index: -1;
    }

    margin: 30px 0;
    text-align: center;
  }

  form {
    width: 100%;
    margin: auto;
    justify-items: center;

    input {
      margin-bottom: 10px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #188091;
      color: #fff;
      border: none;
      margin: 20px auto;
      width: 200px;
      height: 50px;
      text-align: center;
      transition: opacity 300ms ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
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

    h1 {
      font-size: 42px;
      font-weight: normal;
    }

    h5 {
      font-size: 20px;
      font-weight: normal;
    }
  }

  img {
    height: 100%;
    width: calc(45% - 5px);
    object-fit: cover;
    object-position: top right;
  }
`;

export const Title = styled.div`
  background: #dcdcdc;
  height: 220px;
  width: 100%;
  box-shadow: 0 15px 15px -15px #000;
  color: #636363;
  display: flex;
  justify-content: center;

  &:before {
    content: '';
    width: 50%;
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      width: 410px;
      flex-direction: column;
      align-items: flex-end;

      h1 {
        font-size: 42px;
        font-weight: normal;
      }

      h5 {
        font-size: 20px;
        font-weight: normal;
      }
    }
  }
`;

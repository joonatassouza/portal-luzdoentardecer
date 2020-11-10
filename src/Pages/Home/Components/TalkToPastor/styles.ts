import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 412px;
  margin-top: -10px;
  width: 100%;
  position: relative;

  background: linear-gradient(
    90deg,
    #188091,
    #188091,
    #188091,
    #188091,
    #1c6275,
    #1c6275,
    #1c6275,
    #213e53,
    #233147
  );
`;

export const Container = styled.div`
  /* border-left-style: solid;
  border-left-width: 1px;
  border-left-color: #bababa;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: #bababa; */

  height: 100%;
  width: 100%;
  margin: auto;
  padding-left: 200px;
  max-width: 1380px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  > img {
    height: 565px;
  }

  section {
    color: #fff;
    margin: 70px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 48px;
      line-height: 45px;
      margin-bottom: 20px;
      margin-left: 24px;
    }

    button {
      background: none;
      border: none;
      color: #fff;
      font-size: 26px;
      margin-bottom: 15px;
      transition: opacity 300ms ease;

      &:hover {
        opacity: 0.7;
      }

      img {
        height: 14px;
        margin-right: 17px;
      }
    }
  }
`;

export const ModalHeader = styled.header`
  background: #188091;
  color: #fff;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: relative;

  &:after {
    content: '';
    z-index: 10;
    position: absolute;
    bottom: -19px;
    left: 100px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;

    border-top: 20px solid #188091;
  }

  button {
    position: absolute;
    top: -15px;
    right: -15px;
    z-index: 9999;

    background: #fff;
    border: none;
    color: #188091;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 30px;
    height: 30px;
    border-radius: 10px;

    img {
      width: 15px;
      height: 15px;
    }
  }

  h3 {
    font-weight: normal;
  }

  strong {
    color: #fff;
  }
`;

export const ModalPastorBody = styled.div`
  background: #fff;
  position: relative;

  form {
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    input {
      margin-bottom: 15px;
    }
  }

  button[type='submit'] {
    background: #188091;
    color: #fff;
    width: 150px;
    padding: 10px;
    border: none;
  }

  button[type='button'] {
    position: absolute;
    bottom: -15px;
    left: 50px;
    z-index: 9999;

    border: none;
    background: #188091;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    width: 230px;
    height: 40px;
    border-radius: 15px;

    img {
      width: 30px;
      height: 25px;
    }
  }
`;

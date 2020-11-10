import styled from 'styled-components';

export const Container = styled.div`
  background: #dcdcdc;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 5px;

  iframe {
    height: ${window.innerHeight * 0.7}px;
    width: 100%;
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
    position: relative;

    h1 {
      font-size: 42px;
      font-weight: normal;
    }

    h5 {
      font-size: 20px;
      font-weight: normal;
    }

    button {
      position: absolute;
      left: 50px;
      bottom: 10px;
      background: transparent;
      border: none;
      color: #fff;
      display: flex;
      width: 160px;
      align-items: flex-start;
      transition: opacity 300ms ease;

      &:hover {
        opacity: 0.7;
      }

      i {
        width: 15px;
        height: 15px;
        margin-top: 3px;
        margin-right: 7px;
        border-radius: 50%;
        background: #e50e61;
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        strong {
          font-size: 17px;
        }

        span {
          font-size: 17px;
          margin-top: -5px;
        }
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

export const BottomContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  background: #188091;

  button {
    border: none;
    background: none;
    width: 250px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    margin: 0 120px;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.7;
    }

    &:first-child {
      text-align: right;
    }

    img {
      margin: 10px;
      width: 35px;
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

  strong {
    color: #fff;
  }
`;

export const ModalAudienceBody = styled.div`
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
    background: #bc1111;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    width: 200px;
    height: 40px;
    border-radius: 15px;

    img {
      width: 40px;
      height: 35px;
    }
  }
`;

export const ModalPedidoBody = styled.div`
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
`;

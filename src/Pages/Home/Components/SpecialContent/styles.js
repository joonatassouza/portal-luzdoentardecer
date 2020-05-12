import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 1400px;
  width: 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background: #dcdcdc;
    z-index: -2;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 300px;
    background: linear-gradient(
      270deg,
      #188091,
      #188091,
      #1c6275,
      #213e53,
      #233147,
      #233147
    );
    z-index: -2;
  }
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
  padding: 0 15px;
  max-width: 1380px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 100px;
    left: calc(50% - 452px);
    width: 452px;
    height: 414px;
    border-top: 6px solid #000;
    border-left: 6px solid #000;
    border-right: 6px solid #000;
    z-index: -1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 514px;
    left: calc(50% - 446px);
    width: 452px;
    height: 756px;
    border-right: 6px solid #000;
    z-index: -1;
  }
`;

export const Column = styled.div`
  height: 100%;
  flex: 1;
  position: relative;

  &:first-child {
    display: flex;
    margin-left: 12px;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  height: 187px;
  width: 475px;
  background: none;
  border: none;
  margin-top: 20px;
  margin-left: 85px;

  display: flex;
  flex-direction: column;

  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: left;
  width: 100%;
  font-size: 62px;
  line-height: 58px;
  padding-left: 58px;
  color: #fff;

  img {
    height: 73px;
    margin-right: 40px;
  }
`;

export const Subtitle = styled.span`
  text-align: right;
  color: #fff;
  font-size: 17px;
`;

export const Card1 = styled.div`
  width: 458px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    margin-top: 5px;
    margin-right: 25px;
    color: #565656;
    font-size: 44px;
    line-height: 41px;
  }

  span {
    color: #565656;
    margin-right: 25px;
    font-size: 19px;
  }

  > img {
    width: 100%;
    filter: grayscale(100%);
    transition: filter 500ms ease;

    &:hover {
      filter: grayscale(0%);
    }
  }

  button {
    background: none;
    border: none;

    img {
      margin-right: 25px;
      width: 40px;
      margin-top: 14px;
    }
  }
`;

export const Card2 = styled.div`
  width: 458px;
  position: absolute;
  bottom: 126px;

  div {
    position: relative;

    > img {
      width: 100%;
      filter: grayscale(100%);
      transition: filter 500ms ease;

      &:hover {
        filter: grayscale(0%);
      }
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      bottom: 20px;
      right: -260px;

      strong {
        margin-top: 5px;
        margin-right: 25px;
        color: #565656;
        font-size: 44px;
        line-height: 41px;
      }

      span {
        color: #565656;
        margin-right: 25px;
        font-size: 19px;
      }

      button {
        background: none;
        border: none;

        img {
          margin-right: 25px;
          width: 40px;
          margin-top: 14px;
        }
      }
    }
  }
`;

export const Card3 = styled.div`
  width: 458px;
  position: absolute;
  bottom: 496px;

  div {
    position: relative;

    > img {
      width: 100%;
      filter: grayscale(100%);
      transition: filter 500ms ease;

      &:hover {
        filter: grayscale(0%);
      }
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 0;
      right: -140px;

      strong {
        margin-top: 5px;
        margin-right: 25px;
        color: #565656;
        font-size: 44px;
        line-height: 41px;
      }

      span {
        color: #565656;
        margin-right: 25px;
        font-size: 19px;
      }

      button {
        background: none;
        border: none;

        img {
          margin-right: 25px;
          width: 40px;
          margin-top: 14px;
        }
      }
    }
  }
`;

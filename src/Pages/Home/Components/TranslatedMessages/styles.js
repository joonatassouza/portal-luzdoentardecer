import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 300px;
  width: 100%;
  position: relative;
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
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Card = styled.div`
  width: 670px;
  position: relative;

  > img {
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    bottom: 72px;
    left: -150px;

    strong {
      margin-top: 5px;
      margin-right: 25px;
      color: #188086;
      font-size: 44px;
      line-height: 41px;
      text-align: right;
    }

    span {
      color: #188086;
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
`;

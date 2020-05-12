import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 410px;
  width: 100%;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100%;
    height: 291px;
    background: #0e1c24;
    z-index: -1;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 0 15px;
  max-width: 1380px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0px;

  img {
    width: 155px;
  }

  p {
    font-size: 7px;
    margin-top: 16px;
    letter-spacing: 3px;
  }
`;

export const Menu = styled.div`
  height: 152px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Items = styled.ul`
  list-style: none;
  border-radius: 1px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #eaeaea;
  display: flex;
  align-items: flex-end;
  margin-top: 32px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    a {
      font-size: 12px;
      letter-spacing: 1px;
      color: #5b5b5b;
      text-decoration: none;
      text-align: center;
      width: 150px;
      padding-bottom: 10px;
      cursor: pointer;
      transition: all 300ms ease;
    }

    transition: all 300ms ease;

    &:after {
      content: '';
      background: #c6215a;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      position: absolute;
      bottom: -2px;
      opacity: 0;

      transition: all 300ms ease;
    }

    &:hover {
      &:after {
        background: #c6215a;
        height: 6px;
        bottom: -4px;
        opacity: 1;
      }

      a {
        font-weight: 100;
        color: #c6215a;
      }
    }
  }
`;

export const SocialMidia = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  display: flex;
  align-items: center;

  li {
    margin: 15px;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.5;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const FooterInfo = styled.div`
  min-width: 85%;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: #b4b4b4;
  margin: 30px 50px;

  img {
    width: 32px;
    height: 43px;
    margin: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-size: 34px;
      margin-bottom: 5px;
    }

    span {
      font-size: 14px;
    }
  }

  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.7;
  }

  &:last-child {
    div {
      align-items: flex-end;
    }
  }
`;

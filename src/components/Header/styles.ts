import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  position: relative;
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

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 32px;
`;

export const Items = styled.ul`
  list-style: none;
  border-radius: 1px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #eaeaea;
  display: flex;
  align-items: flex-end;
  margin-top: 30px;

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

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;

  &:before {
    content: '';
    width: 250px;
  }

  img {
    width: 34px;
    height: 34px;
    cursor: pointer;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    background: transparent;
    width: 250px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #d3d3d3;
    font-size: 12px;
    transition: color 300ms ease;

    &:hover {
      color: #5b5b5b;
    }
    strong {
      margin-left: 5px;
    }

    img {
      width: 25px;
      height: 25px;
      margin-left: 15px;
    }
  }
`;

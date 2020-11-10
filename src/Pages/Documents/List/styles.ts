import styled from 'styled-components';

export const Container = styled.div``;

export const Body = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 0 50px;
  color: #636363;

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 30px 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #545454;
      padding: 10px 0;
      transition: background 300ms ease;

      &:hover {
        background: #fafafa;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        height: 30px;
        background: #188091;
        color: #fff;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        color: #188091;
        font-weight: bold;
        transition: opacity 300ms ease;

        &:hover {
          opacity: 0.7;
        }
      }

      div {
        margin: 0 40px;
        display: flex;
        justify-content: space-between;

        button {
          padding: 5px;
          background: none;
          border: none;
          transition: opacity 300ms ease;

          &:hover {
            opacity: 0.7;
            padding: 3px;

            img {
              width: 24px;
              height: 24px;
            }
          }

          img {
            width: 20px;
            height: 20px;
          }
        }
      }

      strong {
        font-weight: normal;
        margin: 0 5px;
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

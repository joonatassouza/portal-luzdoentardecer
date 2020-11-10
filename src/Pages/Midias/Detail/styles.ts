import styled from 'styled-components';

interface CardProps {
  thumbnail?: string;
}

export const Container = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 0 50px;
  color: #636363;
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

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px;
  grid-template-rows: 200px;
  grid-gap: 2px;
  margin: 20px 0;

  &:hover {
    .cursor {
      display: block;
    }
  }
`;

export const Card = styled.button<CardProps>`
  width: 200px;
  height: 200px;

  background-image: url(${props => props.thumbnail});
  background-repeat: none;
  background-size: cover;
  background-position: center;

  border: none;

  display: flex;
  flex-direction: column;
  padding: 20px;

  filter: grayscale(100%);

  transition: filter 0.5s ease;

  strong,
  span {
    filter: drop-shadow(0px 5px 15px black);
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  &:hover {
    filter: grayscale(0%);

    strong,
    span {
      opacity: 1;
    }
  }
`;

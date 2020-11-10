import styled from 'styled-components';

interface CardProps {
  thumbnail?: string;
}

export const Wrapper = styled.header`
  height: 690px;
  width: 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(50%);
    background: #dcdcdc;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50px;
    right: 0;
    width: calc(50% + 380px);
    height: calc(100% - 100px);
    background: linear-gradient(290deg, #1c6275, #213e53, #233147);
    filter: drop-shadow(-7px 8px 8px #555);
    z-index: -1;
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
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 260px 260px 260px;
  grid-template-rows: 260px 260px;
  grid-gap: 6px;

  &:hover {
    .cursor {
      display: block;
    }
  }
`;

export const Card = styled.button<CardProps>`
  width: 260px;
  height: 260px;

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

export const Title = styled.strong`
  color: #fff;
  font-size: 19px;
  text-align: left;
`;

export const Subtitle = styled.span`
  color: #fff;
  font-size: 19px;
  text-align: left;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 260px;
  margin-left: 60px;
`;

export const InfoTitle = styled.strong`
  font-size: 52px;
  line-height: 50px;
  margin-bottom: 20px;
`;

export const InfoSubtitle = styled.span`
  font-size: 15px;

  a {
    color: #e2e2e2;
    font-weight: bold;
    text-decoration: none;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.7;
    }
    &:visited {
      color: #e2e2e2;
    }
  }
`;

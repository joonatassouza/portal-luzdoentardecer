import styled from 'styled-components';

export const Container = styled.div``;

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
    object-position: top;
  }
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 0 50px;
`;

export const Date = styled.p`
  width: 100%;
  margin: 30px 20px;
  font-size: 21px;
`;

export const Paragraph = styled.p`
  width: 100%;
  font-size: 28px;
  text-align: justify;
  line-height: 38px;
  margin: 20px 0;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => (props.light ? '#999999' : '#4F4F4F')};
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  margin: 50px 0;

  img {
    width: 10px;
    margin-right: 10px;
  }
`;

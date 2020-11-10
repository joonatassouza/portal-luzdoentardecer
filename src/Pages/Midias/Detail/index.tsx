import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import midiasImg from '../../../assets/midias.png';

import { Container, TopContainer, Body, Cards, Card } from './styles';

const Detail: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <img src={midiasImg} alt="imagem" />
          <div>
            <h1>Mídias</h1>
            <h1>Reunião de Vigília 2020</h1>
            <h5>Fotos Domingo 01JAN</h5>
          </div>
        </TopContainer>
        <Body>
          <Cards>
            <Card thumbnail="https://picsum.photos/590" />
            <Card thumbnail="https://picsum.photos/591" />
            <Card thumbnail="https://picsum.photos/592" />
            <Card thumbnail="https://picsum.photos/593" />
            <Card thumbnail="https://picsum.photos/594" />
            <Card thumbnail="https://picsum.photos/595" />
            <Card thumbnail="https://picsum.photos/596" />
            <Card thumbnail="https://picsum.photos/597" />
            <Card thumbnail="https://picsum.photos/598" />
            <Card thumbnail="https://picsum.photos/599" />
            <Card thumbnail="https://picsum.photos/600" />
            <Card thumbnail="https://picsum.photos/601" />
            <Card thumbnail="https://picsum.photos/602" />
            <Card thumbnail="https://picsum.photos/603" />
            <Card thumbnail="https://picsum.photos/604" />
            <Card thumbnail="https://picsum.photos/605" />
            <Card thumbnail="https://picsum.photos/606" />
            <Card thumbnail="https://picsum.photos/607" />
            <Card thumbnail="https://picsum.photos/608" />
            <Card thumbnail="https://picsum.photos/609" />
            <Card thumbnail="https://picsum.photos/610" />
            <Card thumbnail="https://picsum.photos/611" />
            <Card thumbnail="https://picsum.photos/612" />
            <Card thumbnail="https://picsum.photos/613" />
            <Card thumbnail="https://picsum.photos/614" />
          </Cards>
        </Body>
      </Container>
      <Footer />
    </>
  );
};

export default Detail;

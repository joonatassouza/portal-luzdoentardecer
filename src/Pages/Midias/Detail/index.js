import React from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import midiasImg from '../../../assets/midias.png';

import { Container, TopContainer, Body, Cards, Card } from './styles';

export default function Detail() {
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
            <Card thumbnail="https://picsum.photos/590"></Card>
            <Card thumbnail="https://picsum.photos/591"></Card>
            <Card thumbnail="https://picsum.photos/592"></Card>
            <Card thumbnail="https://picsum.photos/593"></Card>
            <Card thumbnail="https://picsum.photos/594"></Card>
            <Card thumbnail="https://picsum.photos/595"></Card>
            <Card thumbnail="https://picsum.photos/596"></Card>
            <Card thumbnail="https://picsum.photos/597"></Card>
            <Card thumbnail="https://picsum.photos/598"></Card>
            <Card thumbnail="https://picsum.photos/599"></Card>
            <Card thumbnail="https://picsum.photos/600"></Card>
            <Card thumbnail="https://picsum.photos/601"></Card>
            <Card thumbnail="https://picsum.photos/602"></Card>
            <Card thumbnail="https://picsum.photos/603"></Card>
            <Card thumbnail="https://picsum.photos/604"></Card>
            <Card thumbnail="https://picsum.photos/605"></Card>
            <Card thumbnail="https://picsum.photos/606"></Card>
            <Card thumbnail="https://picsum.photos/607"></Card>
            <Card thumbnail="https://picsum.photos/608"></Card>
            <Card thumbnail="https://picsum.photos/609"></Card>
            <Card thumbnail="https://picsum.photos/610"></Card>
            <Card thumbnail="https://picsum.photos/611"></Card>
            <Card thumbnail="https://picsum.photos/612"></Card>
            <Card thumbnail="https://picsum.photos/613"></Card>
            <Card thumbnail="https://picsum.photos/614"></Card>
          </Cards>
        </Body>
      </Container>
      <Footer />
    </>
  );
}

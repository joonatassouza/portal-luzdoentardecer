import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import mensagensImg from '../../../assets/mensagens.png';
import downloadSvg from '../../../assets/download.svg';
import viewSvg from '../../../assets/view.svg';
import printSvg from '../../../assets/print.svg';

import { Container, TopContainer, Body } from './styles';

const List: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <img src={mensagensImg} alt="imagem" />
          <div>
            <h1>Leitura</h1>
            <h1>Mensagens Traduzidas</h1>
            <h5>Por Ministério Luz do Entardecer</h5>
          </div>
        </TopContainer>
        <Body>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
              item => (
                <li key={item}>
                  <span>{item.toString().padStart(2, '0')}</span>
                  <a href="/">Adoção Espiritual</a>
                  <div>
                    <button type="button" onClick={() => alert('Baixou')}>
                      <img src={downloadSvg} alt="baixar" />
                    </button>
                    <button type="button" onClick={() => alert('Olha aqui')}>
                      <img src={viewSvg} alt="visualizar" />
                    </button>
                    <button type="button" onClick={() => alert('Imprimiu')}>
                      <img src={printSvg} alt="imprimir" />
                    </button>
                  </div>
                  <strong>23/09/1956</strong>|
                  <strong>Tabernáculo Branham</strong>-
                  <strong>Jeffersonville, Indiana - EUA</strong>
                </li>
              ),
            )}
          </ul>
        </Body>
      </Container>
      <Footer />
    </>
  );
};

export default List;

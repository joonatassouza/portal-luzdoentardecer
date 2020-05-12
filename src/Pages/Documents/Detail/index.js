import React, { useState } from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';

import mensagemImg from '../../../assets/mensagens.png';
import downloadSvg from '../../../assets/download-b.svg';
import adocaoEspiritual from '../../../assets/Adocao-Espiritual.pdf';

import { Container, TopContainer, PdfWrapper, Body } from './styles';
import './styles.css';

export default function Detail() {
  const [page, setPage] = useState(1);

  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <img src={mensagemImg} alt="imagem" />
          <div>
            <h1>Mensagens</h1>
            <h1>Adoção Espiritual</h1>
            <h5>Traduzida em 07 DEV 2020</h5>
            <a
              href="http://luzdoentardecer.org/wp-content/uploads/2017/10/Ado%C3%A7%C3%A3o-Espiritual.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={downloadSvg} alt="download" />
              <span>FAÇA O DOWNLOAD EM PDF</span>
            </a>
          </div>
        </TopContainer>
        <Body>
          <PdfWrapper>
            <Topbar
              title="Adoção Espitirual"
              url="http://luzdoentardecer.org/wp-content/uploads/2017/10/Ado%C3%A7%C3%A3o-Espiritual.pdf"
            />
            {page && (
              <PDFViewer
                page={page}
                scale={2.112}
                document={{
                  url: adocaoEspiritual,
                }}
                canvasCss="customCanvas"
                css="customViewer"
                navigation={(props) => (
                  <Navbar
                    {...props}
                    setPage={(p) => {
                      setPage(0);
                      setTimeout(() => {
                        setPage(p);
                      }, 1);
                    }}
                  />
                )}
              />
            )}
          </PdfWrapper>
        </Body>
      </Container>
      <Footer />
    </>
  );
}

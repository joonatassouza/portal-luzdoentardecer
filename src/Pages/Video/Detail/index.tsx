import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import pregacoesImg from '../../../assets/pregacoes.png';
import xSvg from '../../../assets/x.svg';
import handSvg from '../../../assets/hand.svg';
import youtubeIconSvg from '../../../assets/youtube-icon.svg';

import {
  Container,
  TopContainer,
  BottomContainer,
  Body,
  ModalHeader,
  ModalAudienceBody,
  ModalPedidoBody,
} from './styles';

const Detail: React.FC = () => {
  const [isModalAudienceOpen, setIsModalAudienceOpen] = useState(false);
  const [isModalPedidoOpen, setIsModalPedidoOpen] = useState(false);

  function handleSubmit(tudo: any) {
    console.log(tudo);
  }

  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <img src={pregacoesImg} alt="imagem" />
          <div>
            <h1>Pregações</h1>
            <h1>A Abertura da Palavra</h1>
            <h5>Pastor Raimundo Maia</h5>
            <button type="button">
              <i />
              <section>
                <strong>AO VIVO AGORA</strong>
                <span>Toledo-PR</span>
              </section>
            </button>
          </div>
        </TopContainer>
        <Body>
          <iframe
            title="video"
            src="https://www.youtube.com/embed/sHRm5_1tUSI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Body>
        <BottomContainer>
          <button type="button" onClick={() => setIsModalAudienceOpen(true)}>
            COMUNIQUE SUA AUDIÊNCIA
            <img src={handSvg} alt="imagem" />
          </button>
          <button type="button" onClick={() => setIsModalPedidoOpen(true)}>
            <img src={handSvg} alt="imagem" />
            PEDIDOS DE ORAÇÃO
          </button>
        </BottomContainer>
      </Container>
      <Footer />
      <Modal
        isOpen={isModalAudienceOpen}
        onRequestClose={() => setIsModalAudienceOpen(false)}
      >
        <ModalHeader>
          <h4>
            Comunique sua <strong>Audiência</strong>
          </h4>
          <button type="button" onClick={() => setIsModalAudienceOpen(false)}>
            <img src={xSvg} alt="close" />
          </button>
        </ModalHeader>
        <ModalAudienceBody>
          <Form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nome" />
            <input name="city" placeholder="Cidade" />
            <input name="state" placeholder="Estado" />
            <button type="submit">Enviar</button>
          </Form>
          <button type="button">
            <img src={youtubeIconSvg} alt="increva-se" />
            INSCREVA-SE
          </button>
        </ModalAudienceBody>
      </Modal>
      <Modal
        isOpen={isModalPedidoOpen}
        onRequestClose={() => setIsModalPedidoOpen(false)}
      >
        <ModalHeader>
          <h4>
            Faça seu <strong>Pedido de Oração</strong>
          </h4>
          <button type="button" onClick={() => setIsModalPedidoOpen(false)}>
            <img src={xSvg} alt="close" />
          </button>
        </ModalHeader>
        <ModalPedidoBody>
          <Form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nome" />
            <input name="city" placeholder="Cidade" />
            <input name="state" placeholder="Estado" />
            <input name="description" placeholder="Faça seu pedido" />
            <button type="submit">Enviar</button>
          </Form>
        </ModalPedidoBody>
      </Modal>
    </>
  );
};

export default Detail;

import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

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

export default function Detail() {
  const [isModalAudienceOpen, setIsModalAudienceOpen] = useState(false);
  const [isModalPedidoOpen, setIsModalPedidoOpen] = useState(false);

  function handleSubmit(tudo) {
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
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Body>
        <BottomContainer>
          <button onClick={() => setIsModalAudienceOpen(true)}>
            COMUNIQUE SUA AUDIÊNCIA
            <img src={handSvg} alt="imagem" />
          </button>
          <button onClick={() => setIsModalPedidoOpen(true)}>
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
          <h1>
            Comunique sua <strong>Audiência</strong>
          </h1>
          <button onClick={() => setIsModalAudienceOpen(false)}>
            <img src={xSvg} alt="close" />
          </button>
        </ModalHeader>
        <ModalAudienceBody>
          <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" />
            <Input name="city" placeholder="Cidade" />
            <Input name="state" placeholder="Estado" />
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
          <h1>
            Faça seu <strong>Pedido de Oração</strong>
          </h1>
          <button onClick={() => setIsModalPedidoOpen(false)}>
            <img src={xSvg} alt="close" />
          </button>
        </ModalHeader>
        <ModalPedidoBody>
          <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" />
            <Input name="city" placeholder="Cidade" />
            <Input name="state" placeholder="Estado" />
            <Input name="description" placeholder="Faça seu pedido" />
            <button type="submit">Enviar</button>
          </Form>
        </ModalPedidoBody>
      </Modal>
    </>
  );
}

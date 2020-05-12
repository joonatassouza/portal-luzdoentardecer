import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';

import arrowRightSvg from '../../../../assets/arrow-right.svg';
import pastorPng from '../../../../assets/Pastor-Raimundo-Maia.png';
import xSvg from '../../../../assets/x.svg';
import pinSvg from '../../../../assets/pin.svg';

import { Wrapper, Container, ModalHeader, ModalPastorBody } from './styles';
Modal.defaultStyles.content.width = '730px';

export default function TalkToPastor() {
  const [isModalPastorOpen, setIsModalPastorOpen] = useState(false);

  function handleSubmit(tudo) {
    console.log(tudo);
  }

  return (
    <Wrapper>
      <Container>
        <img src={pastorPng} alt="Raimundo Maia" />
        <section>
          <h1>
            Pastor
            <br />
            Raimundo Maia
          </h1>
          <button type="button" onClick={() => setIsModalPastorOpen(true)}>
            <img src={arrowRightSvg} alt="go" />
            Fale com o pastor
          </button>
          <button type="button">
            <img src={arrowRightSvg} alt="go" />
            Faça seu pedido de oração
          </button>
          <button type="button">
            <img src={arrowRightSvg} alt="go" />
            Escreva seu testemunho
          </button>
        </section>
      </Container>
      <Modal
        isOpen={isModalPastorOpen}
        onRequestClose={() => setIsModalPastorOpen(false)}
      >
        <ModalHeader>
          <h1>
            Fale com <strong>O Pastor</strong>
          </h1>
          <button onClick={() => setIsModalPastorOpen(false)}>
            <img src={xSvg} alt="close" />
          </button>
        </ModalHeader>
        <ModalPastorBody>
          <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" />
            <Input name="city" placeholder="Cidade" />
            <Input name="state" placeholder="Estado" />
            <Input type="email" name="email" placeholder="E-mail" />
            <Input name="phone" placeholder="Telefone" />
            <Input name="description" placeholder="Sua mensagem" />
            <button type="submit">Enviar</button>
          </Form>
          <button type="button">
            <img src={pinSvg} alt="Visite-nos" />
            Nos faça uma Visita
          </button>
        </ModalPastorBody>
      </Modal>
    </Wrapper>
  );
}

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';

import arrowRightSvg from '../../../../assets/arrow-right.svg';
import pastorPng from '../../../../assets/Pastor-Raimundo-Maia.png';
import xSvg from '../../../../assets/x.svg';
import pinSvg from '../../../../assets/pin.svg';

import { Wrapper, Container, ModalHeader, ModalPastorBody } from './styles';

const TalkToPastor: React.FC = () => {
  const [isModalPastorOpen, setIsModalPastorOpen] = useState(false);

  useEffect(() => {
    if (Modal.defaultStyles.content) {
      Modal.defaultStyles.content.width = '730px';
    }
  }, []);

  function handleSubmit(tudo: any) {
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
          <h3>
            Fale com <strong>O Pastor</strong>
          </h3>
          <button type="button" onClick={() => setIsModalPastorOpen(false)}>
            <img src={xSvg} alt="close" />
          </button>
        </ModalHeader>
        <ModalPastorBody>
          <Form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nome" />
            <input name="city" placeholder="Cidade" />
            <input name="state" placeholder="Estado" />
            <input type="email" name="email" placeholder="E-mail" />
            <input name="phone" placeholder="Telefone" />
            <input name="description" placeholder="Sua mensagem" />
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
};

export default TalkToPastor;

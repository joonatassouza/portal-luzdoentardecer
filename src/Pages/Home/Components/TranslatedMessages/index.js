import React from 'react';

import playGSvg from '../../../../assets/play-g.svg';
import messsagePng from '../../../../assets/mensagem.png';

import { Wrapper, Container, Card } from './styles';

export default function TranslatedMessages() {
  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={messsagePng} alt="Mensagens" />
          <section>
            <button type="button">
              <img src={playGSvg} alt="go" />
            </button>
            <strong>
              Mensagens
              <br /> Traduzidas
            </strong>
            <span>Acesse e faça o</span>
            <span>download em PDF</span>
          </section>
        </Card>
      </Container>
    </Wrapper>
  );
}

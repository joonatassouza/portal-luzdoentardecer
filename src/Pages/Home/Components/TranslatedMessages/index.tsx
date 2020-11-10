import React from 'react';

import { useHistory } from 'react-router-dom';
import playGSvg from '../../../../assets/play-g.svg';
import messsagePng from '../../../../assets/mensagem.png';

import { Wrapper, Container, Card } from './styles';

const TranslatedMessages: React.FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={messsagePng} alt="Mensagens" />
          <section>
            <button
              type="button"
              onClick={() => {
                history.push('/mensagens');
              }}
            >
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
};

export default TranslatedMessages;

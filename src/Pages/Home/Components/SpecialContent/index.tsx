import React from 'react';

import playSvg from '../../../../assets/play.svg';
import playBSvg from '../../../../assets/play-b.svg';
import youngBranhamPng from '../../../../assets/youngBranham.png';
import branhamPng from '../../../../assets/Branham.png';
import mariaPng from '../../../../assets/Maria.png';

import {
  Wrapper,
  Container,
  Column,
  Button,
  Title,
  Subtitle,
  Card1,
  Card2,
  Card3,
} from './styles';

const SpecialContent: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Card1>
            <img src={youngBranhamPng} alt="William Marriom Branham" />
            <strong>Livro Gerações</strong>
            <span>Relembrando a vida de um Profeta</span>
            <span>por Angela Smith</span>
            <button type="button">
              <img src={playBSvg} alt="go" />
            </button>
          </Card1>
          <Card2>
            <div>
              <img src={branhamPng} alt="Os Atos do Profeta" />
              <section>
                <button type="button">
                  <img src={playBSvg} alt="go" />
                </button>
                <strong>
                  Os Atos
                  <br /> do Profeta
                </strong>
                <span>Por Pearry Green</span>
                <span>Clique e veja</span>
              </section>
            </div>
          </Card2>
        </Column>
        <Column>
          <Button type="button">
            <Title>
              <img src={playSvg} alt="Ir" />
              Conteúdos Especiais
            </Title>
            <Subtitle>
              Veja conteúdos exclusivos
              <br /> preparados para você!
            </Subtitle>
          </Button>
          <Card3>
            <div>
              <img src={mariaPng} alt="Cartas de Andina" />
              <section>
                <button type="button">
                  <img src={playBSvg} alt="go" />
                </button>
                <strong>
                  Cartas
                  <br /> de Andina
                </strong>
                <span>Uma emocionante história</span>
                <span>Relembre</span>
              </section>
            </div>
          </Card3>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default SpecialContent;

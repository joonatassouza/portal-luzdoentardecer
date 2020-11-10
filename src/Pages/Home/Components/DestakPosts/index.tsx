import React from 'react';
import { useHistory } from 'react-router-dom';

import post1Jpg from '../../../../assets/post1.jpg';
import post2Jpg from '../../../../assets/post2.jpg';
import post3Jpg from '../../../../assets/post3.jpg';
import post4Jpg from '../../../../assets/post4.jpg';
import post5Jpg from '../../../../assets/post5.png';
import post6Jpg from '../../../../assets/post6.png';

import {
  Wrapper,
  Container,
  Cards,
  Card,
  Title,
  Subtitle,
  Info,
  InfoTitle,
  InfoSubtitle,
} from './styles';

const DestakPosts: React.FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <Info>
          <InfoTitle>Clique e acesse conteúdos exclusivos</InfoTitle>
          <InfoSubtitle>
            Acesse nosso canal no{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCLdZNjdA7z32kaG5hulZyEw"
            >
              Youtube
            </a>
          </InfoSubtitle>
          <InfoSubtitle>Curta e compartilhe</InfoSubtitle>
        </Info>
        <Cards>
          <Card thumbnail={post1Jpg} onClick={() => history.push('/post')}>
            <Title>O Quíntuplo de Efésios</Title>
            <Subtitle>Éber Correa</Subtitle>
          </Card>
          <Card thumbnail={post2Jpg} onClick={() => history.push('/post')}>
            <Title>Adquirindo conhecimento</Title>
            <Subtitle>Luz do Entardecer</Subtitle>
          </Card>
          <Card thumbnail={post3Jpg} onClick={() => history.push('/post')}>
            <Title>Altar da família</Title>
            <Subtitle>Pastor Elismar</Subtitle>
          </Card>
          <Card thumbnail={post4Jpg} onClick={() => history.push('/post')}>
            <Title>Leituras diversas</Title>
            <Subtitle>Lus do Entardecer</Subtitle>
          </Card>
          <Card thumbnail={post5Jpg} onClick={() => history.push('/post')}>
            <Title>A Hora tem Chegado</Title>
            <Subtitle>Neville Maia</Subtitle>
          </Card>
          <Card thumbnail={post6Jpg} onClick={() => history.push('/post')}>
            <Title>Esclarecendo Conceitos</Title>
            <Subtitle>Luz do Entardecer</Subtitle>
          </Card>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default DestakPosts;

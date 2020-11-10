import React from 'react';

import pregacao1Jpg from '../../../../assets/pregacao1.jpg';
import pregacao2Jpg from '../../../../assets/pregacao2.jpg';
import pregacao3Jpg from '../../../../assets/pregacao3.jpg';
import pregacao4Jpg from '../../../../assets/pregacao4.jpg';
import pregacao5Jpg from '../../../../assets/pregacao5.jpg';
import pregacao6Jpg from '../../../../assets/pregacao6.jpg';

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

const LastPosts: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Cards>
          <Card thumbnail={pregacao1Jpg}>
            <Title>Live com pastor Paulino</Title>
            <Subtitle>Pastor Josué Mendes</Subtitle>
          </Card>
          <Card thumbnail={pregacao2Jpg}>
            <Title>Live com ministros</Title>
            <Subtitle>Pastor Josué Mendes</Subtitle>
          </Card>
          <Card thumbnail={pregacao3Jpg}>
            <Title>Live com pastor Raimundo Maia</Title>
            <Subtitle>Pastor Josué Mendes</Subtitle>
          </Card>
          <Card thumbnail={pregacao4Jpg}>
            <Title>A Rainha de Sabá</Title>
            <Subtitle>Pastor Raimundo Maia</Subtitle>
          </Card>
          <Card thumbnail={pregacao5Jpg}>
            <Title>Culto de domingo</Title>
            <Subtitle>Pastor Raimundo Maia</Subtitle>
          </Card>
          <Card thumbnail={pregacao6Jpg}>
            <Title>Live com irmã Sueli Maia</Title>
            <Subtitle>Pastor Josué Mendes</Subtitle>
          </Card>
        </Cards>
        <Info>
          <InfoTitle>Assista nossos últimos sermões</InfoTitle>
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
      </Container>
    </Wrapper>
  );
};

export default LastPosts;

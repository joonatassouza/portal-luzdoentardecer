import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import registerImg from '../../assets/register-user.png';

import { Container, TopContainer, Title, Body } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string()
    .required()
    .when('password', (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')]) : field
    ),
});

export default function Register() {
  function handleSubmit(tudo) {
    console.log(tudo);
  }

  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <img src={registerImg} alt="imagem" />
          <div>
            <h1>Cadastro</h1>
            <h1>De Usuários</h1>
            <h5>Fique por dentro!</h5>
          </div>
        </TopContainer>
        <Title>
          <div>
            <div>
              <h1>Cadastre-se</h1>
              <h1>Acesse e Compartilhe</h1>
              <h5>Seja um missionário digital</h5>
            </div>
          </div>
        </Title>
        <Body>
          <div>
            Já tem Cadastro? Faça seu Login
            <button type="button">aqui</button>
          </div>
          <button type="button" onClick={() => {}}>
            Entrar com facebook
          </button>
          <section>
            <span>ou</span>
          </section>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="firstname" placeholder="Nome" />
            <Input name="lastname" placeholder="Sobrenome" />
            <Input name="email" type="email" placeholder="E-mail" />
            <Input
              name="birthday"
              type="date"
              placeholder="Data de Nascimento"
            />
            <Input name="city" placeholder="Cidade" />
            <Input name="state" placeholder="Estado" />
            <Input name="country" placeholder="País" />
            <Input name="street" placeholder="Rua" />
            <Input name="neighborhood" placeholder="Bairo" />
            <Input name="postalcode" placeholder="CEP" />
            <Input name="password" type="password" placeholder="Senha" />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
            />
            <button type="submit">Cadastrar-se</button>
          </Form>
        </Body>
      </Container>
      <Footer />
    </>
  );
}

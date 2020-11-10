import React from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import registerImg from '../../assets/register-user.png';

import { Container, TopContainer, Title, Body } from './styles';

const Register: React.FC = () => {
  async function handleSubmit(data: any) {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
      confirmPassword: Yup.string().required(),
      // .when('password', (password: string, field: Yup.WhenOptions<str>) =>
      //   password ? field.required().oneOf([Yup.ref('password')]) : field,
      // ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    console.log(data);
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
          <button
            type="button"
            onClick={() => {
              //
            }}
          >
            Entrar com facebook
          </button>
          <section>
            <span>ou</span>
          </section>
          <Form onSubmit={handleSubmit}>
            <input name="firstname" placeholder="Nome" />
            <input name="lastname" placeholder="Sobrenome" />
            <input name="email" type="email" placeholder="E-mail" />
            <input
              name="birthday"
              type="date"
              placeholder="Data de Nascimento"
            />
            <input name="city" placeholder="Cidade" />
            <input name="state" placeholder="Estado" />
            <input name="country" placeholder="País" />
            <input name="street" placeholder="Rua" />
            <input name="neighborhood" placeholder="Bairo" />
            <input name="postalcode" placeholder="CEP" />
            <input name="password" type="password" placeholder="Senha" />
            <input
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
};

export default Register;

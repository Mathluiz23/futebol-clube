import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';
import { adminPayload, userPayload } from './mocks'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota /login', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(adminPayload as User);
  });

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  });

  it('1 - Verifica o status retornado quando o usuário loga com sucesso', async () => {
    chaiHttpResponse = await chai.request(app)
      .post('/login').send({email:'admin@admin.com', password:'secret_admin'})
      
      expect(chaiHttpResponse).to.be.status(401);
  });

  it('2 - Verifica o status retornado, quando o email não é informado ao tentar fazer login', async () => {
    chaiHttpResponse = await chai.request(app)
      .post('/login').send({ password: adminPayload.password });

      expect(chaiHttpResponse).to.have.status(401);
  });

  it('3 - verifica a resposta quando o usuario nao informa email', async () => {
    chaiHttpResponse = await chai.request(app)
    .post('/login').send({password:'aaa'})
      

    expect(chaiHttpResponse).to.be.status(401);
    expect(chaiHttpResponse.body).to.includes.keys('message');
    expect(chaiHttpResponse.body.message).to.deep.equal('All fields must be filled' );
  });

  it('4 - Verifica a mensagem retornada quando o usuario não informa o password ao realizar o login', async () => {
    chaiHttpResponse = await chai.request(app)
      .post('/login').send({email:'admin@admin.com'});
      

      expect(chaiHttpResponse.body).to.includes.keys('message');
      expect(chaiHttpResponse.body.message).to.deep.equal('All fields must be filled' );
  });
});

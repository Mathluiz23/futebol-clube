import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';
import { userPayload } from './mocks'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(userPayload as any);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Quando o login é realizado com sucesso, verifica status', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({ email: userPayload.email, password: userPayload.password });

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Verifica quando o login é realizado, se o usuário está correto', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({ email: userPayload.email,
        password: userPayload.password });
  
       expect(chaiHttpResponse).to.property('email').contain('admin@admin.com');
  });

  it('Verifica quando o login é realizado, se o email está correto', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({ password: userPayload.password });
       expect(chaiHttpResponse).to.have.status(401);
  });
});

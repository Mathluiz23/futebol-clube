import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { userPayload, clubs, adminPayload } from './mocks';

import { Response } from 'superagent';
import Club from '../database/models/Club';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /clubs', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon
      .stub(Club, "findAll")
      .resolves([userPayload, adminPayload] as any[]);
  });

  after(() => {
    (Club.findAll as sinon.SinonStub).restore();
  });

  it('1 - Quando a busca é realizada com sucesso, verifica status', async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs');

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('2 - Verifica a quantidade correta de usuarios',async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs');

    expect(chaiHttpResponse.body).to.length(2);
  });
});

describe('Testando a rota /clubs/:id', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Club, "findOne")
      .resolves(clubs[0] as unknown as Club);
  });
 
  after(() => {
    (Club.findOne as sinon.SinonStub).restore();
  });

  it('3 - Quando a busca é realizada com sucesso, verifica status', async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs/1')

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('4 - Verifica a mensagem de erro quando a pesquisa é realizada com uma string e não por um número',async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs/aaaa');
    
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'id must be a number' });
  });

  it('5 - Verifica se o retorno do club é o mesmo pesquisado pelo id',async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs/1');

    expect(chaiHttpResponse.body.id).to.equal(clubs[0].id);
  });
});

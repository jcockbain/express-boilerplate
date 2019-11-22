const server = require('../setup/server.setup');

const { expect } = require('../setup/chai.setup');

describe('/api/v1/example', () => {
  describe('get /example', () => {
    it('returns 200 for first task', async () => {
      const res = await server().get('/api/v1/example');
      expect(res.status).to.equal(200);
      expect(res.body.success).to.equal(true);
    });
    describe('GET /example/:id', () => {
      it('returns 200, and correct ID', async () => {
        const res = await server().get('/api/v1/example/2');
        expect(res.status).to.equal(200);
        expect(res.body.number).to.equal('2');
      });
    });
  });
});

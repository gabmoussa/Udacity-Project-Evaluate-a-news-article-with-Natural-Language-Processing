const req = require('supertest');
const application = require('../src/server/application')

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const res = await req(application).get('/');
        expect(res.statusCode).toBe(200);
    });
})
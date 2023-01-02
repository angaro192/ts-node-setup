import app from './app';
import * as request from 'supertest';

describe('GET /', () => {
  it('GET / => Hello Word', async () => {
    const result = await request(app).get('');
    expect(result.text).toEqual('Hello Word');
    expect(result.statusCode).toEqual(200);
  });
});

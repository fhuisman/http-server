import { createHttpServer } from '../src/index';
import * as request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';

let server: ReturnType<typeof createHttpServer>;

beforeAll(() => {
  server = createHttpServer();
  server.listen(0); // Dynamic port assignment
});

afterAll(() => {
  server.close(); // Clean up the server after tests
});

describe('HTTP Server', () => {
  it('should return OK for /ok', async () => {
    const response = await request(server).get('/ok');
    expect(response.status).toBe(200);
  });

  it('should return the number doubled for /double?number=2', async () => {
    const response = await request(server).get('/double?number=2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 4 });
  });

  it('should return 400 for /double without a valid number', async () => {
    const response = await request(server).get('/double?number=abc');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Please provide a valid number.' });
  });
});

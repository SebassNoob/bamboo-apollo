import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = new Elysia({ prefix: '/api' })
  .use(swagger())
  .get('/', () => 'H dfdffufgfgddfd')
  .get('/id/:id', ({ params: { id } }) => id)
  .get('/mirror', ({ body }) => body, {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
    }),
  })
  .listen({
    port: PORT,
    hostname: HOST,
  });

console.log(`Listening on ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;

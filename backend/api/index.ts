import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';

const PORT = 8080;

const app = new Elysia()
  .use(swagger())
  .get('/', () => 'H sucu')
  .get('/id/:id', ({ params: { id } }) => id)
  .get('/mirror', ({ body }) => body, {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
    }),
  })
  .listen(PORT);

console.log(`Listening on ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;

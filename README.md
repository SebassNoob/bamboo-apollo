This is a minimal Bun + NextJS + Elysia monorepo template. Containerised with docker.

## features
- Fullstack frontend (NextJS) and backend server (Elysia)
- NextJS HMR 
- Comes with eslint and prettier (make prettier)
- Out-of-the-box swagger automatic documentation


## run

Requires:
```
docker compose
make
```

Run with ``make run`` and stop everything with ``make down``.
## known issues
- NextJS 13.x.x does not support bun as a runtime. Uses node as fallback.
- Hot reloading with ``bun --hot/--watch ...`` is not supported on mounted windows drives. Uses ``docker compose watch`` to sync the file onto the container and run ``bun --watch ...`` from there

## TODO
- Add Turso/Postgres support...?
- Add Nodemon HMR for backend server
- Connect backend to frontend with axios
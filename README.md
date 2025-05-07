# Pug Renderer Middleware for Hono

# Description

This is a middleware for the Hono framework that allows you to render Pug
templates. It provides a simple way to integrate Pug rendering into your Hono
applications.

# Installation

To install the middleware, you can use npm or yarn:

```bash
npm install hono-pug-renderer
```

or

```bash
yarn add hono-pug-renderer
```

or

```bash
pnpm add hono-pug-renderer
```

or

```bash
bun add hono-pug-renderer
```

# Usage

## Basic Example

```javascript
import {Hono} from 'hono';
import {pugRenderer} from 'hono-pug-renderer';
import path from 'path';

const app = new Hono();

app.use('*', pugRenderer(path.join(__dirname, 'views')));

app.get('/', (c) => {
  return c.pug('index');
});

export default app;
```

## Options

You can pass options to the `pugRenderer` function to customize its behavior.

```javascript
app.get('/', (c) => {
  return c.pug('index', {
    title: 'My Page',
    message: 'Hello, world!'
  });
});
```

# Author

[@LucasVbr](https://github.com/LucasVbr)

# License

MIT


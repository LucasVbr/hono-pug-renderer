import { Context } from 'hono';
import { renderFile } from 'pug';
import path from 'path';

declare module 'hono' {
  interface Context {
    pug: (template: string, locals?: Record<string, any>) => Response;
  }
}

function pugRenderer(viewsPath: string) {
  return async (c: Context, next: () => Promise<void>) => {
    c.pug = (template: string, locals: Record<string, any> = {}) => {
      const filePath = path.join(viewsPath, `${template}.pug`);
      const html = renderFile(filePath, locals);
      return c.html(html);
    };
    await next();
  };
}

export { pugRenderer };


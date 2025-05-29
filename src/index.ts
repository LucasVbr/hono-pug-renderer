import type {Context, MiddlewareHandler, Next} from 'hono';
import {renderFile} from 'pug';
import path from 'path';

declare module 'hono' {
  interface ContextRenderer {
    /**
     * Renders a template with optional local variables.
     *
     * @param template - The name of the template to render.
     * @param locals - Optional key-value pairs to pass to the template.
     * @returns A Response or Promise<Response>
     */
    (
        template: string,
        locals?: Record<string, any>,
    ): Response | Promise<Response>;
  }
}

/**
 * Middleware to render Pug templates.
 * @param viewPath - The directory where Pug templates are located.
 */
export function pugRenderer(viewPath: string): MiddlewareHandler {
  return async (c: Context, next: Next) => {
    c.setRenderer((template: string, locals: Record<string, any> = {}) => {
      const filePath = path.join(viewPath, `${template}.pug`);
      const html = renderFile(filePath, locals);
      return c.html(html);
    });
    await next();
  };
}
import type { AnyRouter } from "@tanstack/react-router";

/// <reference types="vinxi/types/server" />
import { getRouterManifest } from "@tanstack/start/router-manifest";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";
import { outdent } from "outdent";

import { createRouter } from "./router";

export type HandlerCallback<TRouter extends AnyRouter> = (ctx: {
  request: Request;
  router: TRouter;
  responseHeaders: Headers;
}) => Response | Promise<Response>;

const streamHandler: HandlerCallback<AnyRouter> = (ctx) => {
  ctx.router.serverSsr!.injectScript(
    () => outdent`
      function initTheme() {
        if (typeof localStorage === 'undefined') return

        const localTheme = localStorage.getItem('theme')
        const preferTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        const resolvedTheme = localTheme === null || localTheme === 'system' ? preferTheme : localTheme

        if (localTheme === null) {
          localStorage.setItem('theme', 'system')
        }
          console.log('initTheme', resolvedTheme)

        document.documentElement.dataset.theme = resolvedTheme
        document.documentElement.style.colorScheme = resolvedTheme
      }
        console.log('initTheme')

      initTheme()`,
  );
  return defaultStreamHandler(ctx);
};
export default createStartHandler({
  createRouter: () => {
    const router = createRouter();
    return router;
  },
  getRouterManifest,
})(streamHandler);

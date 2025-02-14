import type { AnyRouter } from "@tanstack/react-router";

/// <reference types="vinxi/types/server" />
import { getRouterManifest } from "@tanstack/start/router-manifest";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";

import { createRouter } from "./router";

export default createStartHandler({
  createRouter: () => {
    const router = createRouter();
    return router;
  },
  getRouterManifest,
})(defaultStreamHandler);

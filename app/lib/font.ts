import { createUnifont, providers } from "unifont";

import { createStorage } from "unstorage";
import fsDriver from "unstorage/drivers/fs-lite";

// const storage = createStorage({
//   driver: fsDriver({ base: "node_modules/.cache/unifont" }),
// });

export const cachedUnifont = await createUnifont([providers.google()]);

// cached data is stored in `node_modules/.cache/unifont`

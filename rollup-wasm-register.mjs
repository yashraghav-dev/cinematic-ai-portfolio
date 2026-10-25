import { registerHooks } from "node:module";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "rollup") {
      return nextResolve("@rollup/wasm-node", context);
    }

    return nextResolve(specifier, context);
  },
});
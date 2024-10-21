CC https://github.com/facebook/react/issues/31311

## Steps to recreate repo from scratch
1. pnpm create vite
2. pnpm add -D eslint-plugin-react-compiler@beta
3. pnpm add react-compiler-runtime@beta babel-plugin-react-compiler@beta valtio
4. Update eslint config to use plugin, and vite.config.ts to use babel plugin (skimming though this guide helped me).
5. Create a proxy object, and use the proxy object using valtio's useProxy hook.
6. Modifying the proxy object should be safe to do, but the compiler rules are too simple to realize that it is safe.

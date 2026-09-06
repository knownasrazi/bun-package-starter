# <PACKAGE_NAME>

A tiny, type-safe Bun + TypeScript package scaffolded with [bun-package-starter](https://github.com/knownasrazi/bun-package-starter).

## develop

```bash
bun install
bun run dev     # watch src/index.ts
```

## verify

```bash
bun run lint        # biome
bun run typecheck   # tsc --noEmit
bun run build       # tsup -> dist/ (esm + cjs + dts)
bun test            # bun test
bun run release     # all of the above
```

## publish

```bash
bun run release
npm version patch && npm publish
```

CI also ships an npm publish workflow - add `NPM_TOKEN` as a repository secret and it publishes on `v*` tags.

## layout

```
src/index.ts     # your library surface
tests/           # bun test specs
dist/            # build output (gitignored)
```
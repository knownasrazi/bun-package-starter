<div align="center">

# bun-package-starter

```
            create-bun-package my-pkg
                         |
                         v
   +--------------------------------------------------------------+
   | src/index.ts    <- your library surface                      |
   | tests/          <- bun test specs                            |
   | tsup.config.ts  <- esm + cjs + dts                           |
   | biome.json      <- lint + format                             |
   | .github/        <- CI + npm publish on v* tags               |
   +--------------------------------------------------------------+
                         |
                         v
                bun run release -> npm publish
```

**One command from empty folder to publishable npm package.**

</div>

<div align="center">

[![npm](https://img.shields.io/npm/v/bun-package-starter?style=flat-square&color=e8b640&logo=npm&label=npm)](https://www.npmjs.com/package/bun-package-starter)
[![downloads](https://img.shields.io/npm/dm/bun-package-starter?style=flat-square&color=c9971f)](https://www.npmjs.com/package/bun-package-starter)
[![license](https://img.shields.io/github/license/knownasrazi/bun-package-starter?style=flat-square&color=a67a14)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/knownasrazi/bun-package-starter/ci.yml?style=flat-square&label=CI)](https://github.com/knownasrazi/bun-package-starter/actions)
[![bun](https://img.shields.io/badge/runtime-bun-a67a14?style=flat-square&logo=bun&logoColor=white)](https://bun.sh)

</div>

---

## scaffold one

```bash
bunx create-bun-package my-pkg
cd my-pkg
bun install
```

You now own a strict, tooled, publish-ready package.

## the parts

| part | role |
| ---- | ---- |
| `src/index.ts` | what consumers import |
| `tests/` | `bun test` specs |
| `tsup.config.ts` | builds esm `.js`, cjs `.cjs`, plus `.d.ts` |
| `biome.json` | lint + format in one tool |
| `.github/workflows/ci.yml` | validate on push / PR |
| `.github/workflows/publish.yml` | npm publish with provenance on `v*` |

## day-one flow

```bash
bun run release      # lint + typecheck + build + test
npm version patch
npm publish          # or: push a v* tag, let CI ship it
```

Everything the release needs ships in the template - including the publish
workflow. Add one `NPM_TOKEN` secret to your repo and npm releases are done
for you.

## release checks a scaffolded package passes out of the box

```
bun run lint        biome check
bun run typecheck   tsc --noEmit, strict
bun run build       tsup esm + cjs + dts
bun test            bun test
```

The starter's own test suite scaffolds a package into a temp dir and runs
its full `release` pipeline - so the template can't drift.

## what's skipped on purpose

- no bundler webpacking - tsup outputs plain esm/cjs
- no test framework download - `bun test` is built in
- no ts-node/@types/node guessing - `@types/bun` covers it
- no lock on a Node version - engines allows node >= 18 and bun >= 1.0

## development of this package

```bash
git clone https://github.com/knownasrazi/bun-package-starter.git
cd bun-package-starter
bun install
bun run release
```

## license

[MIT](./LICENSE) + [Razi](https://github.com/knownasrazi)

---

<div align="center">

*from empty folder to published package in one command.*

</div>
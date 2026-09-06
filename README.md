<div align="center">

# bun-package-starter

**one click in. a package shipping to npm.**

</div>

<div align="center">

[![license](https://img.shields.io/github/license/knownasrazi/bun-package-starter?style=flat-square&color=7c5cd6)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/knownasrazi/bun-package-starter/ci.yml?style=flat-square&label=CI)](https://github.com/knownasrazi/bun-package-starter/actions)
[![bun](https://img.shields.io/badge/runtime-bun-7c5cd6?style=flat-square&logo=bun&logoColor=white)](https://bun.sh)

</div>

---

## one click in

Use this repository as a template, clone it, and you own a strict, tooled,
publish-ready npm package.

```
bun install
# ... write your library in src/index.ts ...
bun run release     # lint + typecheck + build + test
```

Push a `v1.0.0` tag and CI publishes to npm with provenance. That's the whole
lifecycle of a package - included.

## the layout

```
bun-package-starter
├── src/index.ts        your library surface - import it from anywhere
├── tests/              bun test specs
├── tsup.config.ts      esm + cjs + dts in one build
├── biome.json          lint + format, recommended preset, strict
├── .github/
│   ├── ci.yml          validate on every push / PR
│   └── publish.yml     npm publish with provenance on v* tags
└── package.json        dual exports, engines, sideEffects: false
```

## everything ships in the template

- **dual module output** - `exports` maps `import` to esm, `require` to cjs, both
  with `.d.ts` types
- **release gate** - `bun run release` runs lint, typecheck, build and tests
  before you ever touch npm
- **publishing workflow** - add one `NPM_TOKEN` secret, tag a release, gone
- **no runtime surprises** - engines allows node >= 18, bun >= 1.0

## what's skipped on purpose

- no test framework download - `bun test` is built in
- no bundler webpacking - tsup outputs plain esm/cjs
- no `@types/node` guessing - `@types/bun` covers it
- no commit hooks, no codegen, no scaffolding step - the repo is the package

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

*from clone to npm release in one command.*

</div>
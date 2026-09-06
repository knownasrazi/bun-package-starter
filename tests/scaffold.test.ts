import { beforeAll, describe, expect, test } from "bun:test";
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { scaffold } from "../src/scaffold";

const EXPECTED_FILES = [
  "package.json",
  "tsconfig.json",
  "tsup.config.ts",
  "biome.json",
  ".gitignore",
  "README.md",
  "src/index.ts",
  "tests/index.test.ts",
  ".github/workflows/ci.yml",
  ".github/workflows/publish.yml",
];

describe("scaffold", () => {
  let root = "";

  beforeAll(async () => {
    const dir = await mkdtemp(join(tmpdir(), "bun-package-starter-"));
    root = await scaffold(join(dir, "my-pkg"));
  });

  test("produces the full project tree", async () => {
    for (const file of EXPECTED_FILES) {
      expect(await Bun.file(join(root, file)).exists()).toBe(true);
    }
  });

  test("substitutes the package name", async () => {
    const pkg = JSON.parse(await readFile(join(root, "package.json"), "utf8")) as { name: string };
    expect(pkg.name).toBe("my-pkg");
  });

  test("scaffolded package passes its own release checks", async () => {
    const install = Bun.spawn(["bun", "install"], { cwd: root });
    await install.exited;
    expect(install.exitCode).toBe(0);
    const release = Bun.spawn(["bun", "run", "release"], { cwd: root });
    const out = await new Response(release.stderr).text();
    await release.exited;
    expect(release.exitCode).toBe(0);
    expect(out).not.toContain("error");
  }, { timeout: 120_000 });
});

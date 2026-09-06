#!/usr/bin/env bun
import { scaffold } from "./scaffold.js";

const name = process.argv[2] ?? "";

if (name === "") {
  console.error("usage: create-bun-package <package-name>");
  process.exit(1);
}
if (name.includes(" ")) {
  console.error("error: package name must be a single word");
  process.exit(1);
}

async function main(): Promise<void> {
  const target = await scaffold(name);
  console.log(`scaffolded a bun package at ${target}`);
  console.log("next:");
  console.log(`  cd ${name}`);
  console.log("  bun install");
  console.log("  bun run release");
  console.log("  npm publish           # after bumping the version");
}

void main();

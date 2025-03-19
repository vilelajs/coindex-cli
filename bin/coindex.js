#!/usr/bin/env node

// external modules
import { Command } from "commander";

// node core modules
import { readFileSync } from "fs";

// internal modules
import LastCommand from "../src/commands/coindex-last.js";
import Daily from "../src/commands/coindex-daily.js";
import Sqm from "../src/commands/coindex-sqm.js";
import Coins from "../src/commands/coindex-coins.js";
import Comb from "../src/commands/coindex-comb.js";

const pkg = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url))
);

const program = new Command();

program
  .name("coindex")
  .description(pkg.description)
  .version(pkg.version);

if (!process.argv[2]) {
  process.argv.push("-h");
}

program.addCommand(LastCommand);
program.addCommand(Daily);
program.addCommand(Sqm);
program.addCommand(Coins)
program.addCommand(Comb);

program.parse();

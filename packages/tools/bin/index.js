#!/usr/bin/env node
"use strict";

const program = require("commander");
const catchCommandError = require("../lib/utils/catchCommandError");
const chalk = require("chalk");

const libHandler = require("../lib/cli/lib/index");

const version = require("../package").version;

program.version(`@eh-design/tools ${version}`).usage("<command> [options]");
program.arguments("<command>").action((cmd) => {
  program.outputHelp();
  console.log(`  ` + chalk.red(`Unknown command  ${cmd}`));
  console.log();
});

program
  .command("run <type>")
  .description("Bundle eh-design app")
  .action((type) => {
    libHandler(type);
  });

program.on("--help", () => {
  console.log();
  console.log(
    `  Run ${chalk.cyan(`eh-design <command> --help`)} for detailed usage of given command.`
  );
  console.log();
});

program.commands.forEach((c) => c.on("--help", () => console.log()));

catchCommandError();

program.parse(process.argv);

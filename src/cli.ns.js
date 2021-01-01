import { Server } from "src/models/Server.ns";
import { Contract } from "./models/Contract.ns";

const COMMANDS = {
  servers: (ns, args) => {
    servers = Server.getAll();
    servers.forEach(ns, (server) => {
      server.tprint(ns);
    });
  },
  contracts: (ns, args) => {
    Contract.solveAll(ns);
  },
  test: {
    sub: {
      commands: (ns, args) => {
        ns.tprint("Subcommand executed");
        console.log("subcommand", args);
      },
    },
  },
};

function executeCommand(ns, tokens) {
  const args = tokens.slice();
  let command = args.shift();
  do {
    command = args.shift();
  } while (typeof command !== "function");
  command(ns, args);
}

export async function main(ns) {
  const tokens = ns.args.slice();
  executeCommand(ns, tokens);
}

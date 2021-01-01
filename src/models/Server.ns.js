export const hostnames = [];
const _staticServerData = {};

export class Server {
  static init(ns) {
    hostnames.push("home");
    let cursor = 0;
    while ((hostname = hostnames[cursor])) {
      const { routeHome, neighbors } = _staticServerData[hostname];
      hostnames.push(
        ...neighbors.filter((neighbor) => {
          if (_staticServerData[neighbor]) return false;
          _staticServerData[neighbor] = {
            neighbors: ns.scan(neighbor),
            routeHome: [...routeHome, hostname],
          };
          return true;
        })
      );
      cursor++;
    }
  }
  static forEach(ns, callback) {
    Server.getAll(ns).forEach(callback);
  }
  static getAll(ns) {
    if (!hostnames.length) Server.init(ns);
    return hostnames.map((hostname) => new Server(ns, hostname));
  }
  constructor(ns, hostname) {
    const [totalRam, usedRam] = ns.getServerRam(host);
    this.hostname = hostname;
    this.routeHome = _staticServerData[hostname].routeHome;
    this.neighbors = _staticServerData[hostname].neighbors;
    this.root = ns.hasRootAccess(host);
    this.money = ns.getServerMoneyAvailable(host);
    this.maxMoney = ns.getServerMaxMoney(host);
    this.security = ns.getServerSecurityLevel(host);
    this.minSecurity = ns.getServerMinSecurityLevel(host);
    this.hackingLevel = ns.getServerRequiredHackingLevel(host);
    this.ram = totalRam;
  }
  tprint(ns) {
    ns.tprint(this.hostname);
  }
  crack(ns) {
    if (this.root) return this;
    if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.brutessh(this.host);
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
      ns.ftpcrack(this.host);
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
      ns.relaysmtp(this.host);
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
      ns.httpworm(this.host);
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
      ns.sqlinject(this.host);
    }
    try {
      ns.nuke(this.host);
      this.root = true;
      console.debug(`Server ${this.host} successfully hacked`);
      return this;
    } catch (err) {
      console.error(err);
      return this;
    }
  }
}

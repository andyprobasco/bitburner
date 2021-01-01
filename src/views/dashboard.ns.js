import { addStyle } from "/bos/bin/theme.ns";
import { getAllServers } from "/bos/models/Servers.ns";

let _$Dashboard;

function createDashboardElement() {
  _$Dashboard = document.createElement("div");
  _$Dashboard.className = "bos__dashboard";
  const $GameContainer = document.getElementById("entire-game-container");
  $GameContainer.appendChild(_$Dashboard);
  addStyle(`.bos__dashboard {
        position: absolute;
        top: 280px;
        right: 0;
        width: 20%;
        height: 500px;
        background-color: white;
    }`);
}

function dashboard(ns) {
  createDashboardElement();
  const servers = getAllServers(ns);
  const ul = document.createElement("ul");
  _$Dashboard.appendChild(ul);
  servers.forEach((server) => {
    const $Server = document.createElement("li");
    $Server.innerHTML = server.host;
    ul.appendChild($Server);
  });
}

export async function main(ns) {
  dashboard(ns);
}

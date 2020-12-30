// wget https://raw.githubusercontent.com/andyprobasco/bitburner/master/rsync.ns.js /rsync.ns

const GIT_ROOT = 'https://raw.githubusercontent.com/andyprobasco/bitburner'
const GIT_BRANCH = 'master'
const BITBURNER_ROOT = '/rsync';
const FILES = [
    'scripts/hack.script',
    'scripts/weaken.script',
    'scripts/grow.script',
]

export async function main(ns) {
    const branchArg = ns.args.find(arg => arg.startsWith('-b=') || arg.startsWith('--branch='));
    const branch = branchArg ? branchArg.split('=')[1] : GIT_BRANCH;
    const paths = FILES.slice();
    while (paths.length) {
        const path = paths.pop();
        await ns.wget(`${GIT_ROOT}/${branch}/${path}.js`, `${BITBURNER_ROOT}/${path}`);
    }
}
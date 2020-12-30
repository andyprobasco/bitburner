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
    FILES.forEach(path =>{
        ns.wget(`${GIT_ROOT}/${branch}/${filePath}.js`, `${BITBURNER_ROOT}/${path}`);
    });
}
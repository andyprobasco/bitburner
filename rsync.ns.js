const GIT_ROOT = '';
const BITBURNER_ROOT = '/rsync/';
const FILES = [
    'scripts/hack',
    'scripts/weaken',
    'scripts/grow',
]

export async function main(ns) {
    FILES.forEach(filePath =>{
        ns.wget(`${GIT_ROOT}${filePath}.js`, `${BITBURNER_ROOT}${filePath}.ns`);
    });
}
const chokidar = require("chokidar");

const watcher = chokidar.watch(__dirname, {
    ignoreInitial: true,
    useFsEvents: true
});

watcher.on('all', (type, path) => {
    console.log(type, path);
});
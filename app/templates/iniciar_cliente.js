const exec = require('child_process').exec;
exec('cd /home/objetivofacil/apps_nodejs/apicliente && npm start', { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
});
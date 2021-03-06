/* https://github.com/GoogleChromeLabs/carlo/blob/master/examples/systeminfo/app.js
 * Copyright 2018 Google Inc., PhantomJS Authors All rights reserved.
 * Licensed under the Apache License, Version 2.0
 */
const carlo = require('carlo');
const path = require('path');
const os = require('os');
const osName = require('os-name');

async function run() {
    let app;
    try {
        app = await carlo.launch(
            {
                bgcolor: '#fff',
                title: 'Systeminfo App',
                left: 0,
                top: 0,
                width: 500,
                height: 500,
                channel: ['canary', 'stable'],
                icon: path.join(__dirname, '/app_icon.png'),
                args: process.env.DEV === 'true' ? ['--auto-open-devtools-for-tabs'] : [],
                localDataDir: path.join(os.homedir(), '.carlosysteminfo'),
            });
    } catch (e) {
        // New window is opened in the running instance.
        console.log('Reusing the running instance');
        return;
    }

    app.on('exit', () => process.exit());
    app.on('window', window => window.load('index.html'));
    app.serveFolder(path.join(__dirname, 'www'));

    await app.exposeFunction('test', test);
    await app.exposeFunction('getOs', getOs);
    await app.load('index.html');
    return app;
}

const getOs = () => {
    // osName(os.platform(), os.release());
    return osName();
}

const test = () => {
    console.log(`test`)
    return "test"
}


// async function systeminfo() {
//     const info = {};
//     await Promise.all([
//         si.battery().then(r => info.battery = r),
//         si.cpu().then(r => info.cpu = r),
//         si.osInfo().then(r => info.osInfo = r),
//     ]);
//     return info;
// }

module.exports = {run};

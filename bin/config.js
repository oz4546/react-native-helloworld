import { Platform } from 'react-native';
import { name, version } from "../package.json";

const appEnvironments = {
    Dev: 'http://dev.wawy.com:4000/',
    Local: 'http://10.0.0.4:5000/',
    Prod: 'https://api.669pro.com/',
    Temp: 'http://63.32.41.149:5000/',
};

const chatEnvironments = {
    Prod: 'https://chat.669pro.com/',
    Local: 'http://localhost:8082/'
};

// @note: dev rule, android support only https.
const appEnv = Platform.OS === 'ios' ? 'Local' : 'Prod';

const apiHost = appEnvironments[appEnv];
const chatHost = chatEnvironments[appEnv];

const voxPass = '85136c79cb';
const voxActive = Platform.OS !== 'ios' || true;

const sessionIdleTime = 1000 * 60 * 5; // 5 minutes
const intercomActive = appEnv === 'Prod';

let appVersion = version;
if (appEnv === 'Local')
    appVersion += `-${appEnv}`

console.log(`API Host: ${apiHost}`);
console.log(`Chat Host: ${chatHost}`);
console.log(`App Info: ${name} ${appVersion}`);

export {
    apiHost,
    voxActive,
    voxPass,
    chatHost,
    sessionIdleTime,
    intercomActive,
    appVersion
};
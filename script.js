const DEFAULT_PORT_HTTP = "22023";
const DEFAULT_PORT_HTTPS = "443";

/**
 * @typedef {{ address: string, port: number, name: string, protocol: string, url: string }} ServerInfo
 * @returns {ServerInfo}
 */
function parseForm() {
    return false;
}

async function downloadAsync() {
    return false;
}

async function openApp() {
    window.location = 'amongus://init?servername=Modded_SA&serverport=22023&serverip=http%3A%2F%2F34.95.199.244&usedtls=false';
    return false;
}

if (["iPhone", "iPad", "iPod"].indexOf(window.navigator.platform) !== -1) {
    setPlatform("ios");
} else if (/Android/.test(window.navigator.userAgent)) {
    setPlatform("android");
} else {
    setPlatform("desktop");
}

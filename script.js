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

let currentPlatform;

function setEnabled(platform, value) {
    for (const e of document.querySelectorAll(`.${platform}-support`)) {
        e.style.display = value ? "block" : "none";
    }
}

function setPlatform(platform) {
    if (currentPlatform === platform) {
        return;
    }

    if (currentPlatform) {
        setEnabled(currentPlatform, false);
        document.getElementById(currentPlatform).classList.remove("text-primary");
    }
}

function setPortIfDefault(protocol) {
}

/**
 * @param {ServerInfo} serverInfo
 * @returns {string}
 */
function generateRegionInfo(serverInfo) {
    const regions = [
        {
            $type: "StaticHttpRegionInfo, Assembly-CSharp",
            Name: serverInfo.name,
            PingServer: serverInfo.address,
            Servers: [
                {
                    Name: "http-1",
                    Ip: serverInfo.url,
                    Port: serverInfo.port,
                    UseDtls: false, // As no custom key can be specified, we need to disable DTLS on custom servers.
                },
            ],
            TranslateName: 1003, // StringNames.NoTranslation
        },
    ];

    const jsonServerData = {
        CurrentRegionIdx: 3,
        Regions: regions,
    };

    return JSON.stringify(jsonServerData);
}

function saveFile(blob, fileName) {
}

function fillFromLocationHash() {
    const urlServerAddress = document.location.hash.substring(1).split(":");
    const serverAddress = urlServerAddress[0];
    const serverPort = urlServerAddress.length > 1 ? urlServerAddress[1] : DEFAULT_PORT_HTTP.toString();
    let protocol = urlServerAddress.length > 2 ? urlServerAddress[2] : "http";
    const serverName = urlServerAddress.length > 3 ? urlServerAddress[3] : "";

    if (serverAddress) {
        document.getElementById("address").value = serverAddress;
    }

    if (parseInt(serverPort) !== NaN) {
        document.getElementById("port").value = serverPort;
    }

    // Set the default protocol to http
    if (protocol !== "http" && protocol !== "https") {
        protocol = "http";
    }
    document.getElementById(protocol).checked = true;

    document.getElementById("name").value = serverName;
}

function setLocationHash() {
    const serverInfo = parseForm();
    document.location.hash = [serverInfo.address, serverInfo.port, serverInfo.protocol, serverInfo.name].join(":");
}

fillFromLocationHash();

if (["iPhone", "iPad", "iPod"].indexOf(window.navigator.platform) !== -1) {
    setPlatform("ios");
} else if (/Android/.test(window.navigator.userAgent)) {
    setPlatform("android");
} else {
    setPlatform("desktop");
}

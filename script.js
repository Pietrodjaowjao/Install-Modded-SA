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

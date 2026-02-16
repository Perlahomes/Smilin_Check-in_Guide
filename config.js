// Centralized site data
const SITE_CONFIG = {
    mainHeading: "Welcome to Smilin ",
    mapLink: "https://maps.app.goo.gl/p5gSQaKnKBE6VFj68",
    touristLink: "https://messinia.mobi/el/article/katalumata/enoikiazomena-domatia/smilin-apartment-enoikiazomena-diamerismata/9695",
    wifi: {
        network: "Comsote-773357",
        password: "cbs5hgd2ga9u3828bx9n"
    },
    entranceCode: "4455#",
    keyBoxCode: "4450"
};

// Populate HTML dynamically
window.addEventListener('DOMContentLoaded', () => {
    // Heading
    const heading = document.getElementById('main-heading');
    if (heading) heading.textContent = SITE_CONFIG.mainHeading;

    // Sidebar links
    const mapLinks = document.querySelectorAll('.map-link');
    mapLinks.forEach(a => a.href = SITE_CONFIG.mapLink);

    const touristLinks = document.querySelectorAll('.tourist-link');
    touristLinks.forEach(a => a.href = SITE_CONFIG.touristLink);

    // Wi-Fi info
    const wifiNetworkEls = document.querySelectorAll('#wifiNetwork');
    wifiNetworkEls.forEach(el => el.textContent = SITE_CONFIG.wifi.network);

    const wifiPasswordEls = document.querySelectorAll('#wifiPassword');
    wifiPasswordEls.forEach(el => el.textContent = SITE_CONFIG.wifi.password);

    // Entrance / Key Box code
    const entranceEls = document.querySelectorAll('#entranceCode');
    entranceEls.forEach(el => el.textContent = SITE_CONFIG.entranceCode);

    const keyBoxEls = document.querySelectorAll('#keyBoxCode');
    keyBoxEls.forEach(el => el.textContent = SITE_CONFIG.keyBoxCode);
});

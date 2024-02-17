let openedTabsString = ""; // Initialize an empty string to store tab details
let intervalId; // Declare intervalId variable outside the functions to access it globally

/* Getting the current tab */
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

/* Logging the current tab */
async function logCurrentTab() {
    let currentTab = await getCurrentTab();
    openedTabsString += `Title: ${currentTab.title}, URL: ${currentTab.url}\n`; // Concatenate tab details
    console.log(openedTabsString);
}

/* Start logging every 5 seconds */
function startLogging() {
    intervalId = setInterval(logCurrentTab, 5000);
}

/* Stop logging */
function stopLogging() {
    clearInterval(intervalId);
}

/* Start logging when the extension is installed */
chrome.runtime.onInstalled.addListener(() => {
    startLogging();
});

/* Stop logging when the extension is uninstalled */
chrome.runtime.onUninstalled.addListener(() => {
    stopLogging();
});

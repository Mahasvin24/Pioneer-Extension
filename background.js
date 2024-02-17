let awaitTitle = true;
let recent1 = "";
let recent2 = "";
let recent3 = "";
let recent4 = "";
let recent5 = "";

function updateRecentTabs(newRecent) {
  if (recent1 === newRecent || recent2 === newRecent || recent3 === newRecent) return;
  recent5 = recent4;
  recent4 = recent3;
  recent3 = recent2;
  recent2 = recent1;
  recent1 = newRecent;
}

function getPrompt() {
  return `"${recent5}", "${recent4}", "${recent3}", "${recent2}", "${recent1}"`;
}

// Move the event listener registration outside setTimeout
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // DEBUG: console.log("OUTSIDE: chrome.tabs.onUpdated", tabId, changeInfo);
    if (changeInfo.url) {
        awaitTitle = true;
    } if (changeInfo.title) {
        updateRecentTabs(changeInfo.title);
        console.log(getPrompt());
        awaitTitle = false;
    }
});

chrome.runtime.onInstalled.addListener(({reason}) => {
  if (reason == 'install') {
    chrome.tabs.create({
      url: "onboarding.html"
    });
  }
});

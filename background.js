// When the extension icon is clicked while on tab 't', sends a message to the content script running on tab 't'
chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, "speedUpPage");
});

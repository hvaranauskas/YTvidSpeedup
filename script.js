console.log("Made content script");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    speedUpVideo();
})

function speedUpVideo() {
    videoElement = document.querySelector('video');
    if (videoElement.playbackRate != 16.0) {videoElement.playbackRate = 16.0;}
    else {videoElement.playbackRate = 1.0;}
}
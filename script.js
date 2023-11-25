// chrome.action.onClicked.addListener(speedUpVideo);
console.log(chrome);
console.log(chrome.action);

function speedUpVideo() {
    console.log("Setting speed");
    videoElement = document.querySelector('video');
    if (videoElement.playbackRate == 16.0) {videoElement.playbackRate = 1.0;}
    else {videoElement.playbackRate = 16.0;}
}
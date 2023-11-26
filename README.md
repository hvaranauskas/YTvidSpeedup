# YTvidSpeedup
Works by setting the playbackRate value of the YouTube video to the maximum value (16.0).\
Speeds up ads too, so can function as a manual YouTube 'adblocker'.\
Once an ad (or video) ends, YouTube plays the subsequent ad or video in a new video element, so playbackRate gets set back to the default value (1.0) automatically.

### TO-DO
- If you go from a page on Youtube.com to a Youtube.com/watch page (e.g. from the homepage to a video), the browser doesn't consider the watch page a new page, so the content script which speeds up the video doesn't get executed and thus the extension doesn't work
  - This can be kind of fixed by simply refreshing the page to force the content script to get executed
- Automatically detect when ad starts playing, speed up video then

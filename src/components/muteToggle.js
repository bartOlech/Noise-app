
function muteMe(elem) {
  elem.muted = true;
  elem.pause();
}
function playMe(elem) {
  elem.muted = false;
  elem.play();
}

// Try to mute all video and audio elements on the page
export function mutePage() {
  document.querySelectorAll("video, audio").forEach( elem => muteMe(elem) );
}
export function playPage() {
  document.querySelectorAll("video, audio").forEach( elem => playMe(elem) );
}


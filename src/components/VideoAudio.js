import React from 'react'

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(url) {
    var request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Our asynchronous callback
    request.onload = function() {
      var data = request.response;
      initAudio(data);
      showData(data);
    };

    request.send();
  }

const VideoAudio = ({url, currTime}) => {
  console.log(currTime);
  return(null)
};
export default VideoAudio;

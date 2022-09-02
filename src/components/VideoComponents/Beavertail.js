import { useEffect, useState } from "react";

const Beavertail = () => {
  const [volume, setVolume] = useState(0.3);
    // const video = document.getElementById("beaverTail");

  useEffect(() => {

    const video = document.getElementById("beaverTail");
     video.volume = volume
  }, [volume]);

  function handlePlay(e) {
    const video = document.getElementById("beaverTail")
    console.log(video, document.getElementById("beaverTail"));
    video.play()
  }

  function handleVolume(e) {
    const video = document.getElementById("beaverTail")
    setVolume(e.target.value);
    console.log(volume, video.volume)
  }

  return (
    <main>
      <h1>Beavertail</h1>
      <video
        id="beaverTail"
        src="/Beavertail.mp4"
        loop={false}
        width="100%"
        height="500"
        controls={true}
      ></video>
      <div id="video-controls">
        <button onClick={handlePlay} type="button" id="play-pause">
          Play
        </button>
        <input type="range" id="seek-bar" defaultValue="0" />
        <button type="button" id="mute">
          Mute
        </button>
        <input
          onChange={handleVolume}
          type="range"
          id="volume-bar"
          min="0"
          max="1"
          step="0.1"
          defaultValue={volume}
        />
        <button type="button" id="full-screen">
          Full-Screen
        </button>
      </div>
    </main>
  );
};

export default Beavertail;

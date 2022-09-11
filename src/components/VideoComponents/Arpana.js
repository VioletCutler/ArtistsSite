import { useEffect, useState } from "react";

const Arpana = () => {
//   const [volume, setVolume] = useState(0.3);
//   // const video = document.getElementById("Arpana");

//   useEffect(() => {
//     const video = document.getElementById("Arpana");
//     video.volume = volume;
//   }, [volume]);

//   function handlePlay(e) {
//     const video = document.getElementById("Arpana");
//     console.log(video, document.getElementById("Arpana"));
//     video.play();
//   }

//   function handleVolume(e) {
//     const video = document.getElementById("Arpana");
//     setVolume(e.target.value);
//     console.log(volume, video.volume);
//   }

  return (
    <main>
      <h1>Arpana</h1>
      <iframe
        width="100%"
        height="600"
        color="blue"
        src="https://www.youtube.com/embed/Vwn7rzt9oME"
        title="Arpana"
        controls='0'
        frameBorder="0"
        autoPlay="1"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestBranding"
        allowFullScreen
      ></iframe>
      {/* <h1>Arpana</h1>
      <video
        id="Arpana"
        src="/Arpana.mp4"
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
      </div> */}
    </main>
  );
};

export default Arpana;

import { useEffect, useState } from "react";
import "../styles/homepage.css";

const Homepage = () => {
  // const [volume, setVolume] = useState(0.3)
  // useEffect(() => {
  //     const video = document.getElementById('snowVideo')
  //     video.volume = volume
  // }, [])
  // function handlePlay(e) {

  //     console.log('e.target', document.getElementById('snowVideo'))
  //     video.play()
  // }
  // function handleVolume(e) {
  //     setVolume(e.target.value)
  // }

  return (
    <div id="homepage">
      <main>
        <section>
          <article>
            {" "}
            <iframe
              width="100%"
              height="300"
              loop={true}
              src="https://www.youtube.com/embed/iHUanjVprDI"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </article>
          <article>
            <h2 className='header' >Header Level 2</h2>
            <p>
              <strong>Pellentesque habitant morbi tristique</strong> senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
              eu libero sit amet quam egestas semper.{" "}
              <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
              leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
              Ut felis.
            </p>
            <h2>Header Level 2</h2>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
                molestie gravida. Curabitur massa. Donec eleifend, libero at
                sagittis mollis, tellus est malesuada tellus, at luctus turpis
                elit sit amet quam. Vivamus pretium ornare est.
              </p>
            </blockquote>
            <h2>Header Level 2</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            {/* <div id="video-controls">
    <button onClick={handlePlay} type="button" id="play-pause">Play</button>
    <input type="range" id="seek-bar" defaultValue="0"/>
    <button type="button" id="mute">Mute</button>
    <input onChange={handleVolume} type="range" id="volume-bar" min="0" max="1" step="0.1" defaultValue={volume}/>
    <button type="button" id="full-screen">Full-Screen</button>
  </div> */}
          </article>
        </section>
      </main>
    </div>
  );
};

export default Homepage;

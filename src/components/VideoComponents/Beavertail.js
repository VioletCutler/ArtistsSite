import { useEffect, useState } from "react";
import "../../styles/beavertail.css"

const Beavertail = () => {
  // const [volume, setVolume] = useState(0.3);
  // useEffect(() => {
  //   const video = document.getElementById("beaverTail");
  //   video.volume = volume;
  // }, [volume]);
  // function handlePlay(e) {
  //   const video = document.getElementById("beaverTail");
  //   console.log(video, document.getElementById("beaverTail"));
  // }
  // function handleVolume(e) {
  //   const video = document.getElementById("beaverTail");
  //   setVolume(e.target.value);
  //   console.log(volume, video.volume);
  

  return (
    <main>
      <h1>Beavertail</h1>
      <iframe
        id="beaverTail"
        width="100%"
        height="600"
        src="https://www.youtube-nocookie.com/embed/KBOtK7bC9Hw"
        title="YouTube video player"
        frameBorder="1"
        autoPlay="1"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
           <h2>HTML Ipsum Presents</h2>

<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

<h2>Header Level 3</h2>

<ol>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ol>

<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

<h3>Header Level 3</h3>

<ul>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ul>
	
    </main>
  );
};

export default Beavertail;

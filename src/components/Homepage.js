import { useEffect, useState } from "react"

const Homepage = () => {
   
    const [volume, setVolume] = useState(0.3)

    useEffect(() => {
        const video = document.getElementById('snowVideo')
        video.volume = volume
    }, [])

 

    function handlePlay(e) {
 
        console.log('e.target', document.getElementById('snowVideo'))
        video.play()
    }

    function handleVolume(e) {
        setVolume(e.target.value)
    }




    return (
        <div>
              <header>
            <h1>Ultraviolet</h1>
        </header>
        <main>
            <video id="snowVideo" src="snow.mp4" loop={true} width='100%' height='500'></video>
            <div id="video-controls">
    <button onClick={handlePlay} type="button" id="play-pause">Play</button>
    <input type="range" id="seek-bar" defaultValue="0"/>
    <button type="button" id="mute">Mute</button>
    <input onChange={handleVolume} type="range" id="volume-bar" min="0" max="1" step="0.1" defaultValue={volume}/>
    <button type="button" id="full-screen">Full-Screen</button>
  </div>
            
        </main>
        </div>
      
    )
}

export default Homepage
const Homepage = () => {

    function handleClick() {
        console.log('click')
    }
    return (
        <div>
              <header>
            <h1>Ultraviolet</h1>
        </header>
        <main>
            <video src="snow.mp4" loop={true} width='100%' height='500' controls={true}></video>
            <div id="video-controls">
    <button type="button" id="play-pause">Play</button>
    <input type="range" id="seek-bar" value="0"/>
    <button type="button" id="mute">Mute</button>
    <input type="range" id="volume-bar" min="0" max="1" step="0.1" defaultValue="1"/>
    <button type="button" id="full-screen">Full-Screen</button>
  </div>
            
        </main>
        </div>
      
    )
}

export default Homepage
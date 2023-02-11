const Toolbar = ({ toolbarVisibility, setToolbarVisibility }) => {
    console.log('initial toolbar visibility', toolbarVisibility)
  function changeToolbarDisplay() {
    console.log("toolbar visibility", toolbarVisibility);
    setToolbarVisibility(!toolbarVisibility);
    console.log("setToolbarVisibility", toolbarVisibility);
  }
  return (
    <div>
        <button id='toolbar-button' onClick={changeToolbarDisplay}>Accessibility Options</button> 
      {toolbarVisibility ? <div id="toolbar">
        <h2 id='accessibility-header'>Toolbar</h2>
        <p>High Contrast</p>
        <p>Negative Contrast</p>
        <p>Increase Text</p>
        <p>Decrease Text</p>
        <p>Grayscale</p>
        <p></p>

        <p></p>
      </div>: null}
      
    </div>
  );
};

export default Toolbar;

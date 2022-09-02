import React from "react";
import {
    Routes,
    Route
} from 'react-router-dom'
import {
    Navbar,
    Homepage,
    Beavertail, 
    Videos
} from './Index'

const App = () => {
    return (
        <div>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/videos' element={<Videos/>} />
                    <Route path='/videos/beavertail' element={<Beavertail />} />
                </Routes>
        </div>
    )
}

export default App
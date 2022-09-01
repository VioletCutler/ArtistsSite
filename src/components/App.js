import React from "react";
import {
    Routes,
    Route
} from 'react-router-dom'
import {
    Navbar,
    Homepage
} from './Index'

const App = () => {
    return (
        <div>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                </Routes>
        </div>
    )
}

export default App
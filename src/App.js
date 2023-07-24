import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Main from "./pages/Main";
// import ListAll from "./pages/ListAll";
import Nav from './components/Nav';

function App() {
    return (
        <div className='App'>
            <Nav />
            <Routes>
                <Route path='/' element={<Main/>}/>
                {/* <Route path='/listall' element={<ListAll/>}/>
                <Route path='/price/:symbol' element={<Price/>}/> */}
            </Routes>
        </div>
    )
}

export default App;
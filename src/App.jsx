import './App.css'
import Add from "./page/Add/index.jsx";
import Home from "./page/Home/index.jsx";
import Detail from "./page/Detail/index.jsx";
import {Provider} from "./utils/context/PostsContext.jsx";
import {Routes, Route} from "react-router-dom";


function App() {

    return (
        <Provider>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/add'} element={<Add/>}/>
                <Route path={'/detail/:id'} element={<Detail />} />
            </Routes>
        </Provider>
    )
}

export default App

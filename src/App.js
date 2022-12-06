import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage';
import AllCharactersPage from './pages/AllCharactersPage';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
import "./assets/style/global.css"
import Layout from './layout/Layout';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout />}>
        <Route index element={ <IndexPage />}/>
        <Route path="/about" element={ <AboutPage />}/>
        <Route path="/all" element={ <AllCharactersPage/>}/>
        <Route path="*" element={<Page404 />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

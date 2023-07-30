import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, CreatePost, Community } from "./page";
import {Navbar} from './components'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <main className='sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

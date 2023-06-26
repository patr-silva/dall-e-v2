import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, CreatePost } from "./page";

function App() {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-slate-800 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <h1 className="text-3xl font-medium text-white font-mono">DALL-E 2.0</h1>
          <p className="text-sm text-white font-mono mt-2">Powered by OpenAI</p>
         
        </Link>
        <Link
          to='/create-post'
          className='font-mono font-medium bg-[#68ACA3] text-white px-4 py-2 rounded-md'
        >
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#e6ebf4] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

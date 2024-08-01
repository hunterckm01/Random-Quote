// import logo from './logo.svg';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import SavedQuotes from './components/SavedQuotes';
import { useContext } from 'react';
import { MyContext } from './ContextApi/MyContext';

function App() {
  const {navigate} = useContext(MyContext);

  return (
    <div className="App w-screen h-screen ">

      <header className = "w-full ">
        <ul className='max-w-[1000px]  mx-auto flex justify-around px-1 py-2 '>
          <li onClick={()=>navigate("/")} className='text-3xl font-semibold cursor-pointer bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-lg transition-all'>Quotes</li>
          <li onClick={()=>navigate("/QuotesSaved")} className = "text-3xl font-semibold cursor-pointer bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-lg transition-all">Saved Quotes</li>
        </ul>
      </header>
    
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/QuotesSaved" element = {<SavedQuotes/>}/>
        <Route path = "/*" element = {<h2 className='w-full h-screen flex items-center justify-center text-2xl font-semibold'>You're at wrong address</h2>}/>
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/chat/' element={<Chat />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App
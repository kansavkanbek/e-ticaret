import { useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageContainer from './containers/PageContainer';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Card from './components/Card'

function App() {
  const {drawer} = useSelector(state=>state.drawer);

  return (
    <div className="App">
     <PageContainer>
       <BrowserRouter>
         <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/detail/:id" element={<Detail/>} />
         </Routes>
         {drawer && <Card/>}
         <Footer/>
       </BrowserRouter>
      </PageContainer> 
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Index'
import Sobre from './Pages/Sobre/index'
import Contato from './Pages/Contato/Index'
import Header from './Components/Header/Index'
import Erro from './Erro/Index'
import Produto from './Pages/Produto/Index'


function RouteApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/sobre' element={ <Sobre/>}/>
            <Route path='/contato' element={ <Contato/>}/>
            <Route path='/produto/:id' element={ <Produto/>}/>
            <Route path='*' element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;
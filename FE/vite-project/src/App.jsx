import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';
import WishList from './pages/WishList/WishList';
import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import AdminLayout from './layout/AdminLayout';
import AdminHome from './pages/AdminHome/AdminHome';
import Add from './pages/Add/Add';
import AdminTable from './pages/Table/AdminTable';
import Update from './pages/Update/Update';
function App() {


  return (
    <>
       <BrowserRouter>
      <Routes>
        {/* client */}
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>


        </Route>
      {/* admin */}
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<AdminHome/>}/>
        <Route path='/admin/add' element={<Add/>}/>
        <Route path='/admin/table' element={<AdminTable/>}/>
        <Route path='/admin/update/:id' element={<Update/>}/>

      </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

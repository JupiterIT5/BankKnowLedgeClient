import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Reg from './pages/Reg'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import AdminPanel from './pages/AdminPanel'
import Calculate from './components/Calculate/Calculate'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/piggyBank' element={<Product productName='Накопительный счёт'/>} />
      <Route path='/autoCredit' element={<Product productName='Автокредит'/>} />
      <Route path='/creditCard' element={<Product productName='Кредитная карта'/>} />
      <Route path='/kidsCard' element={<Product productName='Дебетовая карта'/>} />
      <Route path='/mortgage' element={<Product productName='Ипотека'/>} />
      <Route path='/financeProtect' element={<Product productName='Финансовая защита'/>} />
      <Route path='/creditNal' element={<Product productName='Потребительский кредит'/>} />
      <Route path='/reg' element={<Reg />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/account' element={<Profile />}/>
      <Route path='/adminPanel' element={<AdminPanel />} />
      <Route path='/calculate' element={<Calculate />}/>
    </Routes>
  )
}

export default App

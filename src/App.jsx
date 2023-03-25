import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddTransfer from './pages/AddTransferToAcc'
import Balance from './pages/Balance'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Passcode from './pages/Passcode'
import Review from './pages/Review'
import Transfer from './pages/Transfer'
import TransferReview from './pages/TransferReview'
import TransferTwo from './pages/TransferTwo'
import Verify from './pages/Verify'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/balance" element={<Balance />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/addtransfer" element={<AddTransfer />} />
      <Route path="/review" element={<Review />} />
      <Route path="/transfer-review" element={<TransferReview />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/passcode" element={<Passcode />} />
    <Route path="/transfertwo" element={<TransferTwo />} />
 </Route>
  </Routes>
    </BrowserRouter>
  )
}

export default App

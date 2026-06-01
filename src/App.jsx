import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import './css/indexstyle.css'
import './css/proyectostyle.css'
import './css/detallestyle.css'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
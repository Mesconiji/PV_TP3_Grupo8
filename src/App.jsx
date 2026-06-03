import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/indexstyle.css'
import './css/proyectostyle.css'
import './css/detallestyle.css'

const App = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

    <Header />

    <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
      <Outlet />
    </Container>

    <Footer />

  </Box>
)

export default App
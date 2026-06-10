import { Outlet } from 'react-router-dom'
import { Grid, Container } from '@mui/material'

import Header from './components/Header'
import Footer from './components/Footer'

import './css/indexstyle.css'
import './css/proyectostyle.css'
import './css/detallestyle.css'

const App = () => (
  <div className="app-root">
    <Header />

    <Container maxWidth="lg">
      <Grid container direction="column">
        <Grid item xs component="main">
          <Outlet />
        </Grid>
      </Grid>
    </Container>

    <Footer />
  </div>
)

export default App
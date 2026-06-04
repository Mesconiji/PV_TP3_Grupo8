import { Outlet } from 'react-router-dom'
import { Grid, Container } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/indexstyle.css'
import './css/proyectostyle.css'
import './css/detallestyle.css'

const App = () => (
  <>
    <Header />

    <Container maxWidth="lg">
      <Grid container direction="column" className="app">
        <Grid item xs component="main" className="app__main">
          <Outlet />
        </Grid>
      </Grid>
    </Container>

    <Footer />
  </>
)

export default App
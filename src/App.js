import { ThemeProvider } from 'styled-components'
import { HomeScreen, ListScreen } from './screens'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme, GlobalStyle } from 'styles'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />"
          <Route path="/list" element={<ListScreen />} />"
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

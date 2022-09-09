import React from 'react'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Education from './components/Education/Education'
import Experiance from './components/Experiance/Experiance'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Education />
      <Experiance />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
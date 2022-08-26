import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Education from './components/Education/Education'
import Projects from'./components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Education />
            <Projects/>
            <Contacts />
            <Footer/>
        </>
    )
}

export default App
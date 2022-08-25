import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Education from './components/Education/Education'
import Contacts from './components/Contacts/Contacts'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Education/>
            <Contacts />
        </>
    )
}

export default App
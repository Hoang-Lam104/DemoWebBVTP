import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './layouts/header'
import Footer from './layouts/footer'
import './App.css'
import { useState, useEffect } from 'react'
import { getConfiguration } from './api/configurationApi'

export default function App() {
  const [configuration, setConfiguration] = useState({})

  useEffect(() => {
    getConfiguration().then((response) => {
      setConfiguration(response.data)
    })
  }, [])

  return (
    <>
      <Header name={configuration.SEOTitle} slogan={configuration.Slogan} hotline={configuration.Hotline} phone={configuration.Phone} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer address={configuration.Address} email={configuration.Email} hotline={configuration.Hotline} phone={configuration.Phone} />
    </>
  )
}
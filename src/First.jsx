import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import SearchResults from './components/SearchResults'
import SingleMovie from './components/SingleMovie'
import Tvshows from './components/Tvshows'
import HeaderMovies from './components/HeaderMovies'

function First() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/search/:searchTerm" element={<SearchResults/>} ></Route>
                <Route path="/singleItem/:id" element={<SingleMovie />}></Route>
                <Route path="/tvshows" element={<Tvshows />}></Route>
                <Route path="/movies" element={<HeaderMovies />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default First
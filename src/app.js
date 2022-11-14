import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Blog from './components/Blog'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/portofolio" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetail/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

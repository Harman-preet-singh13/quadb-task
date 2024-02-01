import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import BookShowPage from './components/BookShowPage';
import ShowsPage from './components/ShowsPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Homepage />} />
          <Route path="/Shows/:id" element={<ShowsPage />} />
          <Route path="/BookShow/:id" element={<BookShowPage />} />
      </Routes> 
    </BrowserRouter>
  )
}

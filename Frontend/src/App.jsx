import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Form from './pages/Form.jsx';
import FormPreview from './pages/FormPreview.jsx';
import FormSubmit from './pages/FormSubmit.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/preview' element={<FormPreview />} />
        <Route path='/submit' element={<FormSubmit />} />
      </Routes>
    </Router>
  )
}

export default App
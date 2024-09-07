import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import './App.css';
import ProductCard from './components/ProdectCard';
import Header from './components/Header';
import Footer from './components/Footer';
import FormPage from './components/FormPage';
import SignUp from './Pages/LoginPage/SignUpPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormDetails from './admin_pages/formDetails';
import Sample from './components/sample';
function App() {
  return (
    <Router>
      <Header name = "KAJA"/>
      <Routes>
        <Route path='/' element={<HomePage />} >
         <Route path='/shop' element={<ProductCard/>}/> 
         <Route path='/website' element={<h1>Website</h1>}/> 
        </Route>
        <Route path="*" element={<NotFoundPage />} /> {/* For handling 404 errors */}
        <Route path="/form" element={ <FormPage />} /> { /* Form page*/}
        <Route path="/about" element={ <AboutPage />} /> { /* About page*/}
        <Route path='/signup' element={<SignUp/>} />
        <Route path="/details" element={<FormDetails/>} />
        <Route path="/sample" element={<Sample/>} /> 
      </Routes>
      <ToastContainer />
      <Footer/>
    </Router>
  );
}

export default App;

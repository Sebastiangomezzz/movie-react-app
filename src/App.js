import React from "react";

//routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>{/* rodeamos la aplicación entera en tags Router para poder usar react routing */}
     <Header /> {/*el header se queda fuera porque va a ser mostrado en todas las páginas */}

    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/:movieId'  element={<Movie/>} />

      <Route path='/*' element={<NotFound/>} /> {/* el asterisco indica que, cuando la ruta no exista, hará fallback hacia ésta página */}
    </Routes>

    
    <GlobalStyle />
  
  </Router>
);

export default App;

import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';

//styles
import { GlobalStyle } from './GlobalStyle'



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      I WILL START HERE
      <GlobalStyle />
      
    </div>
  );
}

export default App;

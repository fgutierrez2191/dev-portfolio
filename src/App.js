import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import Header from "./components/Header";
import Resume from './components/Resume';

function App() {

  
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
        case 'Resume':
          return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      <Header>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      </Header>
      <main>
      <div>{renderPage(currentPage)}</div>
      </main>
      <Footer>

      </Footer>
    </div>
  );
}


export default App;





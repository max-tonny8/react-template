import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import Main from './Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='bg-black w-full'>
      <div className='flex mx-auto 2xl:max-w-[1440px] px-[70px] max-md:px-[35px] w-full relative z-[100]'>
        <Nav />
      </div>
      <div className='flex mx-auto 2xl:max-w-[1440px] w-full'>
        <Main />
      </div>
      <div className='flex mx-auto 2xl:max-w-[1440px] w-full'>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

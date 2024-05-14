import './App.css';

import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';
/* npm install react-scroll */
import {Link, Element} from 'react-scroll';

function App() {
  return (
    <>
      <div className='main_head'>
        <div className='main_title'>
          <Link to="main_page" smooth={true} duration={500} className='cursor'>Shinchan</Link>
        </div>

        <div className='Menu'>
          <Link to="gallery" smooth={true} duration={500} className='cursor'>Gallery</Link>
        </div>

        <div className='Menu'>
          <Link to="blog" smooth={true} duration={500} className='cursor'>Blog</Link>
        </div>
      </div>

      <div className='main_body'>
        <Element name='gallery'>
          <Gallery></Gallery>
        </Element>
        <Element name='blog'>
          <Blog></Blog>
        </Element>
      </div>   
    </>
  );
}

export default App;

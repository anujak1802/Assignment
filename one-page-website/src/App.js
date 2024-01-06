import React from 'react'
import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright,faSearch,faStar,faLock, faArrowRightToBracket, faGlobe, faKey, faCreditCard, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import nuxt from './nuxt.png';
import micro from './miro.png';
import lottie from './lottie.jpg';
import wise from './wise.svg';
import dribble from './dribble.jpg';
import kinsta from './kinsta.png';
import behance from './behance.png';
import angel from './angel.png';
import phone from './phone.png'
import spend from './spend.png'
import img from './img.png'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`App ${menuOpen ? 'menu-open' : ''}`}>
      <header className="App-header">
      <div className="announcement"><span> Announcement</span> &nbsp;&nbsp;&nbsp;&nbsp;We are happy to announce that we raise $2 million in Seed Funding</div>
      <nav>
          <div className="logo">Mode UI</div>
          <div className={`navbar ${menuOpen ? 'open' : ''}`}>
            <a className="nav " href="#section1">
            <button class="dropdown dropbtn">Card Access &nbsp;&nbsp;<FontAwesomeIcon icon={faChevronDown} /></button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div></a>
            <a className="nav"  href="#section2">Banking</a>
            <a className="nav"  href="#section3">Processing</a>
            <a className="nav"  href="#section3">About</a>
            <a href="#section4" className="nav">Carrier</a>
            <a href='#section5' className="nav">Contact</a>
              
           
          </div>
          <div className="auth-buttons">
            <button className='login btn'>Login &nbsp;<FontAwesomeIcon icon={faArrowRightToBracket}/></button>
            
          </div>

          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </nav>
      </header>

      <main>
                  
          
          <section className='section1' id="section1">
                    <div className='short'>Seamless Experience</div>
                    <h2>Unleashing the Next<br />Generation of Card<br />Solutions</h2>
                    <div className='sec1'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
                    <button className='card btn'>Unlock your Card &nbsp;<FontAwesomeIcon icon={faArrowRight}/></button>
                    <p>*No credit card required</p>
                  </section>
         
                <section id='section2' className="image-container">
                 <div className='image'>
                 <img src={nuxt} alt="Image 1" />
                  <img src={micro} alt="Image 2" />
                  <img src={lottie} alt="Image 3" />
                  <img src={wise} alt="Image 4" />
                  <img src={dribble} alt="Image 5" />
                  <img src={kinsta} alt="Image 6" />
                  <img src={angel} alt="Image 7" />
                  <img src={behance} alt="Image 8" /></div> 
                  </section>

        <section id="section3" className='section2'>
          <h2>Elevating Card Programs with<br />Cutting-Edge Technology</h2>
          <div className='sec1'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
          <button className='com btn'>Compare of Pro features &nbsp;<FontAwesomeIcon icon={faArrowRight}/></button>
        </section>

        <section id="section4" className='section4'>
        <div className="section">
            <FontAwesomeIcon className='icon' icon={faGlobe}/>
            <p>Globally Accepted</p>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis</div>
          </div>
          <div className="section">
          <FontAwesomeIcon className='icon' icon={faKey}/>
          <p>Biometric Integrated</p>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis</div>
          </div>
          <div className="section">
          <FontAwesomeIcon className='icon' icon={faLock}/>
          <p>Full Secured</p>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis</div>
          </div>
        </section>

        <section id="section3" className='section2 section3'>
          <h2>Elevating Card Programs with<br />Cutting-Edge Technology</h2>
          <div className='sec1'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
          <button className='com btn'>Compare of Pro features &nbsp;<FontAwesomeIcon icon={faArrowRight}/></button>
        </section>

        <section id="section5" className='section5'>
        <div className="sec">
            <img src={phone} alt="Image 1" />
          </div>
          <div className="sec">
            <img src={spend} alt="Image 2" />
          </div>
        </section>

        <section id="section6" className="vertical-blocks-section">
          <div className="vertical-block">
            <div>2 Million</div>
            <h5>Customers</h5>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </div>
          <div className="vertical-block">
          <div>1K</div>
          <h5>Downloads</h5>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </div>
          <div className="vertical-block">
          <div>$73 Million</div>
          <h5>Transaction</h5>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </div>
          <div className="vertical-block">
          <div>2.0</div>
          <h5>Lastest Version</h5>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </div>
        </section>

        <section id="section3" className='section2 section7'>
          <img src={wise} alt="" />
          <h2>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</h2>
          <img className='face' src={img} alt="" />
          <p><span>Nick Babich</span> <br /> Lead Designer <br /><FontAwesomeIcon className='star' icon={faStar}/><FontAwesomeIcon className='star' icon={faStar}/><FontAwesomeIcon className='star' icon={faStar}/><FontAwesomeIcon className='star' icon={faStar}/></p>
          
        </section>

        <section id="section3" className='section2 section8'>
          <h2>Unlock Limitless Possibilities with<br />Our New Card Solutions</h2>
          {/* <div className='sec1'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div> */}
          <button className='unlock card btn'>Unlock a Card &nbsp;<FontAwesomeIcon icon={faCreditCard}/></button>
          <button className='customer login btn'>Customer Support &nbsp;<FontAwesomeIcon icon={faHeadphones}/></button>
        </section>
      </main>

      <footer>
      <section id="section3" className='section2 foot'>
          <h2>Mode UI</h2>
          <div className='sec1'>Mode UI is a comprehensive design system that empowers <br /> designers and developers to create cohesive and visually stunning <br /> user interfaces across various platforms and devices</div>
          </section>
        <section className="section9">
        <p><span>Company</span> <br />About us <br />Pricing <br />Contact us <br />Features</ p>

  <p><span>Product</span><br />Figma design system <br />Ios kit <br />Android kit <br />WireFrame</p>
  <p><span>Resources</span><br />Templates<br />Landing pages <br />Documentation <br />Comp Library</p>
  <p><span>Legal</span><br />Privacy Policy<br />Terms & Conditions<br />Disclamer <br />Affiliate programme</p>
  <p><span>Support</span><br />Self Center<br />Raise Ticket<br />Report <br />Refund</p>
  </section>
  <section id="section3" className='f foot'>
          <h2><FontAwesomeIcon icon={faCopyright} style={{width:'18px', padding:'7px'}}/><FontAwesomeIcon icon={faSearch} style={{width:'18px', padding:'7px'}}/><FontAwesomeIcon icon={faCopyright} style={{width:'18px', padding:'7px'}}/></h2>
          <div>© 2023 Mode UI  Inc. All Rights Reserved.</div>
          </section>
      </footer>
    </div>
  );
}

export default App;

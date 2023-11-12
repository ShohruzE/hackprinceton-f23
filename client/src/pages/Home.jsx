import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/index.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <main>
      <section id = "hero">
        <div className='flex-container'>
          <div className='hero-content'>
            <h1>Make learning sweet again.</h1>
            <Link to="/product" className="explore-honeydo-button">Explore HoneyDo</Link>
          </div>
          <img src = "books.png" alt = "HoneyDew"></img>
        </div>
      </section>

      <section id = "backstory">
        <div className='about-container'>
          <div className = 'about-us-content'>
            <h1>About us</h1>
            <div className='about-us-text'>
              <div className='sub-heading'>
                <h2>HoneyDo's founders value making learning simple.</h2>
              </div>
                <ul>
                    <li>
                        <p>Shohruz, the president of Hunter’s CS Club, founded the club to deliver introductory CS content for all interested students.</p>
                    </li>

                    <li>
                        <p>Sumayia joined Shohruz’s mission by sending out bi-weekly newsletters linked with educational resources. </p>
                    </li>
                    <li>
                        <p>Yna babysits children and proofreads their homework to slowly guide them towards the right answers.</p>
                    </li>
                </ul> 
            </div>
          </div>
          <img src = "three-people.png" />
        </div>
    </section>

        
      <section id = "why-honeyDo">
        <div className='why-container'>
            <div className='why-header'>
                <h1>Why HoneyDo?</h1>
            </div>
            <div className='why-content'>
                <h3>In an era of fast-paced technology everywhere, HoneyDo is designed to slow us down. As Computer Science majors at Hunter College, Sumayia, Shohruz, and Ynalois are dedicated to offering educational assistance seamlessly.</h3>
                <Link to='/pricing'>View Pricing</Link>
            </div>
        </div>
      </section>

      <footer>
        <div class = "footer-content">
            <p>Designed and developed by Sumayia, Shohruz and Ynalois for HackPrinceton F'23.</p>
        </div>
    </footer>

    </main>
  )
}

export default Home
import React from 'react'
import '../styles/index.css';
import '../styles/Pricing.css';

import {Link} from "react-router-dom";

const Pricing = () => {
  return (
    <div className='container'>
        <div className='heading'>
            <h1>Pricing</h1>
        </div>

        <div className='pricing-cards'>
            <div className='pricing-card'>
                <div className='card-header'>
                    <h2>Free Plan</h2>
                </div>
                <div className='card-body'>
                    <h3>$0.00</h3>
                    <br></br>
                    <p>Millions of textbook questions and solutions</p>
                    <p>Limited to only three (3) prompt submissions</p>
                    <p>Limited to only three (3) hints</p>
                    <p>Access to answers</p>
                </div>
                <div className='card-footer'>
                    <Link to='/product' className="free-link">Current</Link>
                </div>
            </div>

            <div className='pricing-card premium'>
                <div className='card-header'>
                    <h2>Premium Plan</h2>
                </div>
                <div className='card-body'>
                    <h3>$10.00</h3>
                    <br></br>
                    <p>Millions of textbook questions and solutions</p>
                    <p>Unlimited topic submissions</p>
                    <p>Unlimited hints</p>
                    <p>Lifetime purchase guaranteed!</p>
                </div>
                <div className='card-footer'>
                    <Link to='/product-premium' className="button">Upgrade</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
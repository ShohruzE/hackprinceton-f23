import React from 'react'
import '../styles/index.css';

import '../styles/Pricing.css'

const Pricing = () => {
  return (
    <div className='container'>
        <div className='heading'>
            <h1>Pricing</h1>
        </div>

        <div className='pricing-cards'>
            <div className='pricing-card'>
                <div className='card-header'>
                    <h2>Free</h2>
                </div>
                <div className='card-body'>
                    <h3>Free</h3>
                    <p>Free</p>
                    <p>Free</p>
                    <p>Free</p>
                    <p>Free</p>
                </div>
                <div className='card-footer'>
                    <button>Sign Up</button>
                </div>
            </div>

            <div className='pricing-card'>
                <div className='card-header'>
                    <h2>Premium</h2>
                </div>
                <div className='card-body'>
                    <h3>Premium</h3>
                    <p>Premium</p>
                    <p>Premium</p>
                    <p>Premium</p>
                    <p>Premium</p>
                </div>
                <div className='card-footer'>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
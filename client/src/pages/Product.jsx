import { useState, useEffect } from 'react'
import '../styles/index.css';
import '../styles/Product.css';

import ResponseAPI from '../services/ResponseAPI.js';
import Card from '../components/Card';

const Product = () => {

    const [value, setValue] = useState("");
    const [message, setMessage] = useState(null);
    const [tries, setTries] = useState(3);
    const [hintMessage, setHintMessage] = useState(null);
    const [numHints, setHints] = useState(3);
  
    /*
    useEffect(() => {
      getMessages();
    }, [message])
    */
  
    const getMessages = async () => {
      try {
        const data = await ResponseAPI.getResponse(value);
        setMessage(data);
      }
      catch (error) {
        throw error;
      }
      console.log(message);
      setValue("");
    }

    const getHint = async() => {
        try {
            const data = await ResponseAPI.getHint(message);
            setHintMessage(data);
        }
        catch (error) {
            throw error;
        }
        console.log(hintMessage);
    }
  
    useEffect(() => {
      const submit = document.getElementById("submit");
      if (tries === 0) {
        submit.disabled = true;
      }
      else {
        submit.disabled = false;
      }
    }, [tries])

    useEffect(() => {
        const submit = document.getElementById("hint");
        if (numHints === 0) {
          submit.disabled = true;
        }
        else {
          submit.disabled = false;
        }
      }, [numHints])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      setTries(tries => tries - 1);
      getMessages();
    }

    const handleHint = (e) => {
        e.preventDefault();
        setHints(numHints => numHints - 1);
        getHint();
    }
  
  /*   useEffect(() => {
      const fetchMessage = async () => {
        const response = await ResponseAPI.getResponse();
        setMessage(response.choices[0].message);
      }
      fetchMessage();
    }, [message]) */
  
    console.log(value);
  

  return (
    <>
        <div className="container">

            <div className="heading">
                <h1>Product</h1>
            </div>

            <div className="product-row">
                <div className='question-box'>
                    <form onClick={handleSubmit}>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                        <div className="submit-container">
                            <button id="submit" type="submit">Send</button>
                            <p>{tries} free tries remaining</p>
                        </div>
                    </form>
                    <Card content={message} />
                </div>

                <div className='hint-box'>
                    <form onClick={handleHint}>
                        <div className="submit-container">
                            <button id="hint" type="submit">Hint</button>
                            <p>{numHints} hints remaining</p>
                        </div>
                    </form>
                    <Card content={hintMessage} />
                </div>


                
            </div>

        </div>
    </>
  )
}

export default Product
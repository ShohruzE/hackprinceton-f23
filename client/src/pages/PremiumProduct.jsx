import { useState, useEffect } from 'react'
import '../styles/index.css';
import '../styles/Product.css';

import ResponseAPI from '../services/ResponseAPI.js';
import Card from '../components/Card';

import '../styles/Product.css';

const PremiumProduct = () => {

    const [value, setValue] = useState("");
    const [message, setMessage] = useState(null);
    const [hintMessage, setHintMessage] = useState(null);
    const [numHints, setHints] = useState(3);
    const [answer, setAnswer] = useState("");
  
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

    const getAnswer = async () => {
      try {
        const data = await ResponseAPI.getAnswer(message);
        setAnswer(data);
      }
      catch (error) {
        throw error;
      }
      console.log(answer);
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
      getMessages();
    }

    const handleHint = (e) => {
        e.preventDefault();
        if(!message){
          alert("Please enter a message first!")
          return;
        }
        setHints(numHints => numHints - 1);
        getHint();
    }

    const handleAnswer = (e) => {
      e.preventDefault();
      if(!message){
        alert("Please enter a message first!")
        return;
      }
      getAnswer();
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
                <h1>HoneyDo</h1>
            </div>

            <div className="product-column">
                <div className='question-box'>
                    <form onClick={handleSubmit}>
                        <div className="submit-container">
                            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                            <button id="submit" type="submit">Send</button>
                        </div>
                    </form>
                    <Card content={message} />
                </div>

                <div className='hint-box'>
                    <form onClick={handleHint}>
                        <div className="submit-container">
                            <p>{numHints} hints remaining</p>
                            <button id="hint" type="submit">Hint</button>
                        </div>
                    </form>
                    <Card content={hintMessage} />
                </div>

                <div className="answer-box">
                <form onClick={handleAnswer}>
                    <div className="submit-container">
                        <button id="answer" type="submit">Click here for answer</button>
                    </div>
                </form>
                <Card content={answer}/>
                </div>


                
            </div>

        </div>
    </>
  )
}

export default PremiumProduct
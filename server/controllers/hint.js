import { OpenAI } from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


const createHint = async (req, res) => {
    try {
        /*
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: req.body.message }],
                max_tokens: 20,
            })
        }
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        console.log(data);
        res.send(data);
        */

        const completion = await openAI.chat.completions.create({
            messages: [
                { role: 'system', content: 'The user will give a question that they need a hint to solve with. The subject could be anything from Algebra 2 to Quantum Computing. Generate a hint that is related to the subject. Do not format it, just give the hint.'},
                { role: 'user', content: req.body.message }
            ],
            model: 'gpt-3.5-turbo',
            max_tokens: 100
        });
        res.status(200).send(completion);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export default {
    createHint
}
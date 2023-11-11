import { OpenAI } from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const createAnswer = async (req, res) => {
    try {
        const completion = await openAI.chat.completions.create({
            messages: [
                {role: 'system', content: 'The user outputs a question. The question can range from difficulties such as elementary math to quantum mechanics. do not explain, go straight to giving the answer.'},
                {role: 'user', content: req.body.message}
            ],
            model: 'gpt-3.5-turbo',
            max_tokens: 100
        });
        res.status(200).send(completion);
    }
    catch (error){
        res.status(500).json({ error: error.message });
    }
}

export default {
    createAnswer
}
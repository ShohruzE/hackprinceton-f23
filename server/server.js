import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import promptsRouter from './routes/prompt.js';
import hintRouter from './routes/hint.js';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', promptsRouter);
app.use('/api/hint', hintRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
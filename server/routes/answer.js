import express from 'express';

import AnswerController from "../controllers/answer.js";

const router = express.Router();

router.post('/answer', AnswerController.createAnswer);

export default router;
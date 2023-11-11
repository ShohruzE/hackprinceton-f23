import express from 'express';

import PromptsController from "../controllers/prompt.js";

const router = express.Router();

router.post('/', PromptsController.createPrompt);

export default router;
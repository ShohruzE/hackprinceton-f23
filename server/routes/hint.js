import express from 'express';

import HintController from "../controllers/hint.js";

const router = express.Router();

router.post('/hint', HintController.createHint);

export default router;
import express from "express";
import QuizRouter from "./quiz.router";
import AttemptRouter from "./attempt.router";

const router = express.Router();

router.use("/quizzes", QuizRouter)
router.use("/attempts", AttemptRouter)

export default router;
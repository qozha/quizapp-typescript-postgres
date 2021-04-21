import express from "express";
import QuizController from "../controllers/quiz.controller";

const router = express.Router();

router.get("/", async(_req, res) => {
    const controller = new QuizController();
    const response = await controller.getQuizzes();

    return res.send(response);
})

router.post("/", async(req, res) => {
    const controller = new QuizController();
    const response = await controller.createQuiz(req.body);

    
    return res.send(response);
})

router.get("/:id", async(req, res) => {
    const controller = new QuizController();
    const response = await controller.getQuiz(req.params.id);
    if(!response) res.status(404).send({message: "No quiz found"})

    return res.send(response);
})

router.delete("/:id", async(req, res) => {
    const controller = new QuizController();
    const response = await controller.deleteQuiz(req.params.id);
    if(!response) res.status(404).send({message: "No quiz found"})

    return res.send(response);
})

router.put("/:id", async (req, res)=> {
    const controller = new QuizController();
    const response = await controller.addQuestiontoQuiz(req.params.id, req.body);

    if(!response) res.status(404).send({message: "No quiz found"})

    return res.send(response);
})

export default router;
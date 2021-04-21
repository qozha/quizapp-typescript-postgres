import express from "express";
import AttemptController from "../controllers/attempt.controller";

const router = express.Router();

router.get("/", async(_req, res) => {
    const controller = new AttemptController();
    const response = await controller.getAttempts();

    return res.send(response);
})

router.post("/", async(req, res) => {
    const controller = new AttemptController();
    const response = await controller.createAttempt(req.body);

    
    return res.send(response);
})

router.get("/:id", async(req, res) => {
    const controller = new AttemptController();
    const response = await controller.getAttempt(req.params.id);
    if(!response) res.status(404).send({message: "No attempt found"})

    return res.send(response);
})


export default router;
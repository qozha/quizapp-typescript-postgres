import { Controller } from "@tsoa/runtime";
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

router.put("/:id", async(req, res)=> { // update attempt
    const controller = new AttemptController();
    const response = await controller.updateAttempt(req.params.id, req.body)

    if(!response) res.status(404).send({message: "No attempt found"})

    return res.send(response);
})

router.delete("/:id", async (req, res)=> {
    const controller = new AttemptController();
    const response = await controller.deleteAttempt(req.params.id)
        
    if(!response) res.status(404).send({message: "No attempt found"})

    return res.send(response);
})

router.delete("/all", async (req, res) => {
    const controller = new AttemptController();
    await controller.deleteAllAttempts()
    
})

export default router;
import { Request, Response } from "express";
import { Beeper } from "../models/beeper";
import { createBeeper, bringAllBeepers, bringBeeperById } from "../services/beeperService.js";
import beeper from "../routes/beeper";


export const newBeeper = async (req: Request, res: Response):Promise<void> => {
    try {
        const name = req.body.name;

        if (!name) {
            res.status(400).json({
                message: "Please enter a name",
            })
        }

        const beeper: Beeper = await createBeeper(name);
        res.status(201).json({ beeper })
    }
    // I still need to handle the catch statement
    catch (error:any) {
        res.status(400).json({
            message: error.message,
        })
    }
}


export const getAllBeepers = async (req: Request, res: Response) => {
    try {
        const beepers: Beeper[] = await bringAllBeepers()
        res.status(200).json(beepers)
    }
        // I still need to handle the catch statement
    catch (error:any) {
        res.status(400).json({
            message: error.message,
        })
    }

}
export const getBeeperById = async (req: Request, res: Response) => {

    const id = req.params.id;

    try {
        const beeper: Beeper = await bringBeeperById(id);
        res.status(200).json(beeper)
    }
    catch (error:any) {
        if (error.message === `Beeper by id ${id} not found`) {
            res.status(404).json({
                message: error.message,
            })
        }
        else {
            res.status(500).json({ error: "Internal server error." });
        }
    }

}
export const updateStatus = async (req: Request, res: Response) => {

}
export const deleteBeeper = async (req: Request, res: Response) => {

}
export const getBeeperByStatus = async (req: Request, res: Response) => {

}
